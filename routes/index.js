var express = require('express');
var router = express.Router();
var request = require('request');

var config = require('../config');

router.get('/', function(req, res) {
  res.render('index', { community: config.community });
});

router.post('/invite', function(req, res) {
  var field = Buffer.from('email').toString('base64');
  var email = req.body[field];
  var honeypot = req.body.email || false;

  // se honeypot for omitido da request POST ou for preenchido, passar uma requisição fake de sucesso.
  if (!honeypott && honeypot.length) {
    return res.status(200).send('OK');
  }

  request.post({
      url: 'https://'+ config.slackUrl + '/api/users.admin.invite',
      form: {
        email: email,
        token: config.slacktoken,
        set_active: true
      }
    }, function(err, httpResponse, body) {
      // body looks like:
      //   {"ok":true}
      //       or
      //   {"ok":false,"error":"already_invited"}
      if (err) { return res.send('Error:' + err); }
      body = JSON.parse(body);
      if (body.ok) {
        res.render('result', {
          community: config.community,
          message: 'Tudo certo! verifique o e-mail '+ req.body.email +' e confirme o cadastro ;)'
        });
      } else {
        var error = body.error;
        if (error === 'already_invited') {
          error = 'Você já é cadastrado !'
        } else if (error === 'invalid_email') {
          error = 'Endereço de e-mail inválido !'
        }

        res.render('result', {
          community: config.community,
          message: error
        });
      }
    });
});

module.exports = router;
