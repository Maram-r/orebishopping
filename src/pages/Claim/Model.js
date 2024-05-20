const mongoose = require('mongoose');

// Définition du schéma pour le modèle de réclamation
const claimSchema = new mongoose.Schema({
  clientName: { type: String, required: true },
  email: { type: String, required: true },
  messages: { type: String, required: true },
  // Autres propriétés de la réclamation si nécessaire
});

// Création du modèle de réclamation à partir du schéma
const Claim = mongoose.model('Claim', claimSchema);

module.exports = Claim;
