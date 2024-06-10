const mongoose = require('mongoose');

const methodeSchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    nom: { type: String, required: true },
    avantages: String,
    desavantages: String,
    descriptionCourte: String,
    descriptionLongue: String,
    methodologie_id: { type: mongoose.Schema.Types.ObjectId, ref: 'methodologies', required: true },
    outils: [String],

});