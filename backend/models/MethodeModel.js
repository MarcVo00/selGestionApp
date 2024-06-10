const mongoose = require('mongoose');

const methodeSchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    nom: { type: String, required: true },
    avantages: [String],
    desavantages: [String],
    descriptionCourte: String,
    descriptionLongue: String,
    outils: String,
    outils_nom: [String],
    img_url: String,

});

module.exports = mongoose.model('Methode', methodeSchema);