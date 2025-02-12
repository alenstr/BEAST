const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "youtube",
  description: "Starts a YouTube Together session",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["yt"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {require("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    if (!message.member.voice.channel)
      return client.sendTime(
        message.channel,
        "❌ | **You must be in a voice channel to play something!**"
      );
    if (
      !message.member.voice.channel
        .permissionsFor(message.guild.me)
        .has("CREATE_INSTANT_INVITE")
    )
      return client.sendTime(
        message.channel,
        "❌ | **Bot doesn't have Create Invite Permission**"
      );

    let Invite = await message.member.voice.channel.activityInvite(
      "880218394199220334"
    ); //Made using discordjs-activity package
    let embed = new MessageEmbed()
      .setAuthor(
        "YouTube Skupaj",
        "https://cdn.discordapp.com/emojis/749289646097432667.png?v=1"
      )
      .setColor("#FF0000").setDescription(`
Če uporabljas YouTube skupaj lahko gledas videje z prijatelji v kanalu!

__**[Pridruži se YouTube skupaj!](https://discord.com/invite/${Invite.code})**__

⚠ **Opomba:** To deluje samo na **NAMIZNEM RAČUNALNIKU**
`);
    message.channel.send(embed);
  },
  SlashCommand: {
    options: [],
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
    run: async (client, interaction, args, { GuildDB }) => {
      const guild = client.guilds.cache.get(interaction.guild_id);
      const member = guild.members.cache.get(interaction.member.user.id);

      if (!member.voice.channel)
        return client.sendTime(
          interaction,
          "❌ | You must be in a voice channel to use this command."
        );
      if (
        !member.voice.channel
          .permissionsFor(guild.me)
          .has("CREATE_INSTANT_INVITE")
      )
        return client.sendTime(
          interaction,
          "❌ | **Bot doesn't have Create Invite Permission**"
        );

      let Invite = await member.voice.channel.activityInvite(
        "755600276941176913"
      ); //Made using discordjs-activity package
      let embed = new MessageEmbed()
        .setAuthor(
          "YouTube Skupaj",
          "https://cdn.discordapp.com/emojis/749289646097432667.png?v=1"
        )
        .setColor("#FF0000").setDescription(`
Če uporabljas YouTube skupaj lahko gledas videje z prijatelji v kanalu!

__**[Pridruži se YouTube skupaj!](https://discord.com/invite/${Invite.code})**__

⚠ **Opomba:** To deluje samo na **NAMIZNEM RACUNALNIKU**
`);
      interaction.send(embed.toJSON());
    },
  },
};
