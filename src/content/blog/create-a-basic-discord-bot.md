---
title: "Create a Basic Discord Bot with JavaScript"
pubDate: 2023-08-09
draft: false
description: "Learn how to create a basic Discord bot with JavaScript."
tags: ["discord", "javascript"]
---

## Creating a Discord Bot

To create a Discord bot, we first need to create a Discord application. You can create a Discord application [here](https://discord.com/developers/applications). Click on the "New Application" button to create a new Discord application. You can name your application whatever you want. I named mine "Guide Bot".
![Discord Developer Portal](https://media.discordapp.net/attachments/1020761875979452458/1108926665779843103/image.png?width=960&height=478)

After creating your application, you will be redirected to the application's dashboard. Click on the "Bot" tab on the left side of the screen. Then, click on the "Add Bot" button to create a bot for your application.

![Discord Developer Portal](https://media.discordapp.net/attachments/1020761875979452458/1108926666098614392/image.png?width=960&height=480)

After creating your bot, click on the `Regenerate` button under the bot's username to generate a token for your bot. You will need this token to login to your bot. **Do not share this token with anyone!**

![Discord Developer Portal](https://media.discordapp.net/attachments/1020761875979452458/1108926666337702020/image.png?width=960&height=480)
![Discord Developer Portal](https://media.discordapp.net/attachments/1020761875979452458/1108926666643869716/image.png?width=960&height=478)

## Creating a Node.js Project

Now that we have created our Discord bot, we can create a Node.js project to start coding our bot. To create a Node.js project, create a new folder and open it in your terminal. Then, run `npm init -y` to create a new Node.js project. This will create a `package.json` file in your project. This file will contain information about your project and the packages that your project depends on. (For this I will be using [Replit](https://replit.com/), but you can use any IDE you want.)

![Node.js Project](https://cdn.discordapp.com/attachments/1020761875979452458/1108927666465288212/image.png)

## Installing Discord.js

Remember how we mentioned that we will be using [Discord.js Version 13](https://old.discordjs.dev/#/docs/discord.js/v13/general/welcome) to create our Discord bot? We will need to install Discord.js in our project. To install Discord.js, run `npm install discord.js@13` in your terminal.

![Installing Discord.js](https://cdn.discordapp.com/attachments/1020761875979452458/1108927924234616892/image.png)

## Creating a Discord Bot File

Now that we have installed Discord.js, we can start coding our Discord bot. Create a new file called `index.js` in your project. This file will contain the code for our Discord bot. We will start by importing the `Client` class from Discord.js. This class will allow us to create a new Discord bot.

```js
const { Client } = require("discord.js")
```

Next, we will create a new instance of the `Client` class. This will create a new Discord bot. We will also pass in an object with the `intents` property set to `32767`. This will allow our bot to receive all intents. You can read more about intents [here](https://old.discordjs.dev/#/docs/discord.js/v13/class/Intents).

```js
const client = new Client({
  intents: 32767,
})
```

Next, we will create a new event listener for the `ready` event. This event will be emitted when our bot is ready to start receiving events. We will log a message to the console when this event is emitted.

```js
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
```

Next, we will login to our bot using the token that we generated earlier. We will also log a message to the console when our bot is logged in.

```js
client.login("your-token-goes-here")
```

Finally, we will add a new event listener for the `messageCreate` event. This event will be emitted when a message is sent in a channel that our bot can see. We will log a message to the console when this event is emitted.

```js
client.on("messageCreate", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!")
  }
})
```

</br>

## Running Our Discord Bot

Now that we have created our Discord bot, we can run it. To run our Discord bot, run `node index.js` in your terminal. This will start our Discord bot. You should see a message in your console that says **Logged in as** `Your Bot's Username`**!**. This means that our Discord bot is ready to start receiving events.

![Running Our Discord Bot](https://cdn.discordapp.com/attachments/1020761875979452458/1108930523960721418/image.png)

</br>

## Inviting Our Discord Bot

Now that we have created our Discord bot, we can invite it to our Discord server. To invite our Discord bot, go to the [Discord Developer Portal](https://discord.com/developers/applications) and click on your application. Then, click on the "OAuth2" tab on the left side of the screen. Then, scroll down to the "OAuth2 URL Generator" section and select the "bot" scope. Then, select the "Administrator" permission. This will generate an invite link for your bot. Copy this link and paste it into your browser. Then, select the server that you want to invite your bot to and click on the "Continue" button. Then, click on the "Authorize" button to invite your bot to your server.

![Inviting Our Discord Bot](https://cdn.discordapp.com/attachments/1020761875979452458/1108931643227504670/image.png)

</br>

## Testing Our Discord Bot

To test our Discord bot, we will send a message in a channel that our bot can see. We will send a message that starts with `ping`. Our bot should respond with `pong!`.

| Message | Response |
| ------- | -------- |
| ping    | pong!    |

`If you do not see a response from your bot, then go to the Discord Developer Portal -> Applications -> Your Application -> Bot -> Scroll Down -> Privileged Gateway Intents -> Toggle all intents on -> Save Changes`

![Testing Our Discord Bot](https://cdn.discordapp.com/attachments/1020761875979452458/1108931096634208346/image.png)

</br>

## Message Type (Message Object)

If you want to know more about the message object, you can use `console.log(message)` to see the message object. You can also use `console.log(message.content)` to see the message content.

```js
client.on("messageCreate", (message) => {
  console.log(message)
  console.log(message.content)
})
```

</br>

### Type

```js
Message {
  channelId: String,
  guildId: String,
  id: String,
  position: Number | null,
  createdTimestamp: Number,
  type: String,
  system: Boolean,
  content: String,
  author: User {
    id: String,
    bot: Boolean,
    system: Boolean,
    flags: UserFlags { bitfield: Number },
    username: String,
    discriminator: String,
    avatar: String | null,
    banner: String | null | undefined,
    accentColor: Number | null | undefined,
  },
  pinned: Boolean,
  tts: Boolean,
  nonce: String,
  embeds: Array,
  components: Array,
  attachments: Map,
  stickers: Map,
  editedTimestamp: null,
  reactions: ReactionManager { message: [Circular *1] },
  mentions: MessageMentions {
    everyone: Boolean,
    users: Map,
    roles: Map,
    _members: null,
    _channels: null,
    _parsedUsers: null,
    crosspostedChannels: Map,
    repliedUser: null
  },
  webhookId: null,
  groupActivityApplication: null,
  applicationId: null,
  activity: null,
  flags: MessageFlags { bitfield: Number },
  reference: null,
  interaction: null
}
```

# Conclusion

In conclusion, creating a Discord bot using Node.js and Discord.js Version 13 is a straightforward process that allows you to add exciting and interactive features to your Discord server. By following the steps outlined in this guide, you can set up your Discord application, create a Node.js project, install Discord.js, and start coding your bot.

Using the power of Node.js, you can leverage its vast ecosystem and libraries to enhance your bot's functionality. Discord.js Version 13 provides an easy-to-use interface for interacting with the Discord API and handling events.

Once you have coded your Discord bot, you can run it using Node.js and see it come to life. By logging in with your bot's token, you can connect it to your Discord server and start receiving events. You can then invite your bot to your server using the OAuth2 URL generator and authorize it with the necessary permissions.

Testing your Discord bot is crucial to ensure that it behaves as expected. By sending messages in a channel your bot can see, you can verify that it responds correctly. You can also explore the message object to access various properties and information about the received messages.

Overall, creating a Discord bot with Node.js and Discord.js Version 13 opens up a world of possibilities for adding custom functionality, automation, moderation, and entertainment to your Discord server. With the knowledge gained from this guide, you are well-equipped to embark on your bot-building journey and create a bot that engages and delights your community. Happy bot building!
