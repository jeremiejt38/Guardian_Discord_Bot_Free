'use strict';

/**
 * suggestions.js
 * Module de gestion du forum de suggestions avec statuts — feature premium.
 */

const { MessageFlags } = require('discord.js');
const { isPremiumFeatureEnabled } = require('../tier/premiumGateUI');
const { getGuildSetting } = require('../config/settings');
const { CHANNELS } = require('../../config');

function isSuggestionThread(thread) {
  const parent = thread.parent;
  if (!parent) return false;
  const suggestionsEnabled = getGuildSetting(thread.guildId, 'channels', 'suggestions_enabled', true);
  if (!suggestionsEnabled) return false;
  return parent.name?.toLowerCase() === CHANNELS.suggestions?.toLowerCase();
}


async function handleNewSuggestionThread(thread) {
  if (!isPremiumFeatureEnabled(thread.guildId)) return;
}

async function handleSuggestionInteraction(interaction) {
  if (!interaction.isButton()) return false;
  if (!interaction.customId?.startsWith('suggestions:status:')) return false;

  if (!isPremiumFeatureEnabled(interaction.guildId)) {
    await interaction.reply({ content: '🔒 Cette feature est disponible en **Guardian Premium** uniquement.', flags: MessageFlags.Ephemeral });
    return true;
  }

}

module.exports = {
  isSuggestionThread,
  handleNewSuggestionThread,
  handleSuggestionInteraction,
};

