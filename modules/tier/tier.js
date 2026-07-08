'use strict';

/**
 * tier.js
 * Système de feature flags premium/free par guild.
 * Utilisé dans tous les modules pour gater les fonctionnalités premium.
 *
 * Usage :
 *   const { isPremium } = require('../tier/tier');
 *   if (!isPremium(guildId)) return; // skip premium logic
 */

