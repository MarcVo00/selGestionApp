const mongoose = require('mongoose');

const outilSchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    nom: { type: String, required: true },
    descriptionLongue: String,
    payant: Boolean,
    url: String,
});

module.exports = mongoose.model('Outil', outilSchema);