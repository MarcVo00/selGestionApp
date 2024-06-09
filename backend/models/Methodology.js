// backend/models/Methodology.js
const mongoose = require('mongoose');

const methodologySchema = new mongoose.Schema({
    nom: { type: String, required: true },
    descriptionCourte: String,
    descriptionLongue: [String],
    délai: [String],
    tailleEquipe: [String],
    complexite: [String],
    budget: [String],
    culture: [String],
    implicationClient: [String],
    informatique: Boolean,
    marketing: Boolean,
    construction: Boolean,
    Education: Boolean,
});

module.exports = mongoose.model('Methodology', methodologySchema);
