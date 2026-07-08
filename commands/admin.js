const { SlashCommandBuilder } = require('discord.js');
const { isBotAdmin } = require('../modules/admin/botUpdater');
const { openOrRefreshPanel } = require('../modules/admin/adminPanel');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('admin')
    .setDescription('Panneau d\'administration système Guardian (réservé au bot admin)')
    .addSubcommand((sub) =>
      sub.setName('panel').setDescription('Ouvre le panneau d\'administration système')
    ),

  async execute(interaction) {
    if (!isBotAdmin(interaction.user.id)) {
      await interaction.reply({ content: '❌ Accès réservé à l\'administrateur système bot.', ephemeral: true });
      return;
    }

    const sub = interaction.options.getSubcommand(false);


    if (sub === 'panel' || !sub) {
      if (interaction.guild) {
        await interaction.reply({ content: '❌ Cette commande est uniquement disponible en message privé (DM).', ephemeral: true });
        return;
      }
      await interaction.deferReply({ ephemeral: true });
      await openOrRefreshPanel(interaction.client);
      await interaction.editReply({ content: '✅ Panneau admin ouvert en DM.' });
    }
  }
};
