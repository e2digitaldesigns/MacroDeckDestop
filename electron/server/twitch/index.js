const storage = require("electron-json-storage");
const tmi = require("tmi.js");
const oAuth = require("./oAuth.json");

const twitchChatBox = () => {
  try {
    storage.get("md", (error, data) => {
      if (error || data === {}) throw error;
      // twitch(data?.settings?.features?.twitch);
    });
  } catch (err) {
    console.error(err);
    return false;
  }
};

module.exports = twitchChatBox;

const twitch = settings => {
  // if (settings?.status !== "1" || !settings?.channels) return;
  return;

  // const client = new tmi.Client({
  //   options: { debug: false, messagesLogLevel: "info" },
  //   connection: {
  //     reconnect: true,
  //     secure: true
  //   },
  //   identity: {
  //     ...oAuth
  //   },
  //   channels: [settings?.channels]
  // });

  // client.connect().catch(console.error);

  // client.on("message", (channel, tags, message, self) => {
  //   if (self) return;

  //   if (message.toLowerCase() === "!hello") {
  //     client.say(channel, `@${tags.username}, heya!`);
  //   }

  //   if (message.toLowerCase() === "!test") {
  //     client.say(channel, `@${tags.username}, wookie's teeth are green!`);
  //   }
  // });
};
