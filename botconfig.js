module.exports = {
  Admins:["754373482820927648","331011483435794432","623872646886719533"], //Admins of the bot
  ExpressServer: true, //If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || ".", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/pyHrNc735T", //Support Server Link
  Token: process.env.Token || "OTMwMTg0MjE4NzY2NjA2Mzg2.YdyLjw.lYorKahTD3kgPs141t8YKUgDjNg", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "930184218766606386", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "9KpvFxEGccU1y9f4TPWFQ6cIEWKkZ5G3", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  ServerDeafen: true, //If you want bot to stay deafened
  DefaultVolume: 100, //Sets the default volume of the bot, You can change this number anywhere from 1 to 100
  CallbackURL: "/api/callback", //Discord API Callback url. Do not touch it if you don't know what you are doing. All you need to change for website to work is on line 20.
  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "TheCRIB je lep", //A Secret like a password
  IconURL:
    "https://cdn.discordapp.com/attachments/817866221151191094/964846737573421066/3dgifmaker90899.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RANDOM", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205281600, //Bot Inviting Permissions
  Website: process.env.Website || "0.0.0.0", //Website where it is hosted at includes http or https || Use "0.0.0.0" if you using Heroku || Do not include /api/callback. Just the website url. I.e. "https://foo.bar"
  //If you get invalid oauth, make sure on the discord developer page you set the oauth url to something like: https://example.com/api/callback.
  
  Presence: {
    status: "idle", // You can show online, idle, and dnd
    name: "BEAST", // The message shown
    type: "WATCHING", // PLAYING, WATCHING, LISTENING, STREAMING
  },

   // Lavalink server; public lavalink -> https://lavalink-list.darrennathanael.com/; create one yourself -> https://darrennathanael.com/post/how-to-lavalink/
  // The default one should work fine, altho if you have issue with it, you can create your own or use another public lavalink.
  Lavalink: {
    id: "Main", //- Used for indentifier. You can set this to whatever you want.
    host: "lavalink.darrenofficial.com", //- The host name or IP of the lavalink server.
    port: 80, // The port that lavalink is listening to. This must be a number!
    pass: "hisudhan", //- The password of the lavalink server.
    secure: false, // Set this to true if the lavalink uses SSL. if not set it to false.
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "588e7ed42a9441309461015da529639c", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "48ddddf9a92c4958888247cb08f66b2d", //Spotify Client Secret
  },
};
