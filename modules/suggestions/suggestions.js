'use strict';

/**
 * suggestions.js
 * Module de gestion du forum de suggestions avec statuts — feature premium.
 *
 * Fonctionnement :
 * - À la création d'un thread dans le forum suggestions → tag "En attente" ajouté auto
 * - Boutons de gestion du statut : En attente / En cours / Acceptée / Rejetée
 * - Réservé aux roles owner/manager pour changer le statut
 *
 * Usage :
 *   const { handleNewSuggestionThread, handleSuggestionInteraction } = require('./suggestions');
 */

