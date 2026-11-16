const { MessageFlags } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const { isPremiumFeatureEnabled } = require('../modules/tier/premiumGateUI');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('license')
    .setDescription('Active une clé de licence Guardian Premium pour ce serveur')
    .addStringOption((option) =>
      option
        .setName('key')
        .setDescription('Clé de licence Guardian Premium')
        .setRequired(true)
    ),
  async execute(interaction) {
    if (!interaction.member.permissions.has('ManageGuild')) {
      return interaction.reply({ content: 'Tu dois avoir la permission Gérer le serveur.', flags: MessageFlags.Ephemeral });
    }

    if (!isPremiumFeatureEnabled(interaction.guildId)) {
      return interaction.reply({
        content: '🔒 Cette fonctionnalité est réservée à Guardian Premium. Contactez le développeur pour obtenir une licence.',
        flags: MessageFlags.Ephemeral
      });
    }

  },
};
