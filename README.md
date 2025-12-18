# 🧙‍♀️ A Simple AI Bot for Slack

A straight forward bot that listens for direct messages and replies with AI-generated responses. Designed to be easy to understand and friendly to chat with.

## ✨ Features

* 💬 Responds to direct messages in Slack
* 👀 Reacts with a temporary "thinking" emoji while generating a response
* 🧠 Uses OpenAI LLM to generate responses
* ⚡️ Built with Bolt for simplicity

## ⚙️ Tech Stack

* **Bolt for JavaScript**
* **Slack Web API**
* **OpenAI**

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-org/simple-ai-slack-bot.git
cd simple-ai-slack-bot
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a Slack app

1. Go to **api.slack.com/apps**
2. Create a new app
3. Enable **Socket Mode** or **Event Subscriptions**
4. Subscribe to the following bot events:

   * `message.im`
5. Add required bot scopes:

   * `chat:write`
   * `reactions:write`
   * `im:history`

### 4. Configure environment variables

Create a `.env` file:

```env
SLACK_BOT_TOKEN=xoxb-...
SLACK_APP_TOKEN=...
OPENAI_API_KEY=...
```

### 5. Run the bot

```bash
npm run start
```

Install the bot to Slack and send it a direct message to try it out!

## ℹ️ How It Works

1. A user sends the bot a direct message
2. The bot adds a 👀 reaction to indicate message processing
3. The message text is sent to the AI engine
4. The AI-generated response is posted back to Slack
5. The 👀 reaction is removed

## ✏️ Example Flow

```text
User: What’s the weather in Toronto, Ontario?
Bot: 👀
Bot: Cold as heck.
```

Happy chatting! 🤖

