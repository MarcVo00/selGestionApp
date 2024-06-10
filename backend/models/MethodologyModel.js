// backend/models/Methodology.js
const mongoose = require('mongoose');

const methodologySchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    nom: { type: String, required: true },
    descriptionCourte: String,
    descriptionLongue: String,
    tailleEquipe: String,
    complexite: String,
    budget: String,
    culture: String,
    implicationClient: String,
    informatique: Boolean,
    marketing: Boolean,
    construction: Boolean,
    Education: Boolean,
    methodes: [String],
    img_url: String,
});

module.exports = mongoose.model('Methodology', methodologySchema);
