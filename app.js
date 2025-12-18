require('dotenv').config()
const { App } = require("@slack/bolt");
const messageHandler = require("./handlers/message");
const welcomeMessage = require("./handlers/app-home-opened");

// Initializes your app with your Slack app and bot token
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
});

app.client.on('disconnect', () => {
  console.warn('Socket disconnected');
});

app.client.on('error', (err) => {
  console.error('Socket error', err);
});

app.message(messageHandler);

app.event("app_home_opened", welcomeMessage);

(async () => {
  // Start your app
  await app.start();

  app.logger.info("⚡️ Bolt app is running!");
})();