// backend/models/Methodology.js
const mongoose = require('mongoose');

const methodologySchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    commonUses: [String],
    advantages: [String]
});

module.exports = mongoose.model('Methodology', methodologySchema);
