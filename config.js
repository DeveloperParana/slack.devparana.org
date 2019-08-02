module.exports = {
  // your community or team name to display on join page.
  community: process.env.COMMUNITY_NAME || 'YOUR-TEAM-NAME',
  // your slack team url (ex: socketio.slack.com)
  slackUrl: process.env.SLACK_URL || 'YOUR-TEAM.slack.com',
  // access token of slack
  // You can generate it in https://api.slack.com/web#auth
  // You should generate the token in admin user, not owner.
  // If you generate the token in owner user, missing_scope error will be occurred.
  //
  // You can test your token via curl:
  //   curl -X POST 'https://YOUR-SLACK-TEAM.slack.com/api/users.admin.invite' \
  //   --data 'email=EMAIL&token=TOKEN&set_active=true' \
  //   --compressed
  slacktoken: process.env.SLACK_TOKEN || 'YOUR-ACCESS-TOKEN',

  // Social links
  site: process.env.SITE_URL || 'SITE_URL',
  facebook: process.env.FACEBOOK_URL || 'FACEBOOK_URL',
  twitter: process.env.TWITTER_TOKEN || 'TWITTER_URL',
  github: process.env.GITHUB_URL || 'GITHUB_URL',

  // validação de captcha
  captchaKey: process.env.CAPTCHA_KEY || 'CAPTCHA_KEY',
  captchaSecret: process.env.CAPTCHA_SECRET || 'CAPTCHA_SECRET',
};
