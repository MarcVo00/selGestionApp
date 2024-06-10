// backend/routes/methodologies.js
const express = require('express');
const router = express.Router();
const Methode = require('../models/MethodeModel');  // Check this path is correct as per your structure

router.get('/', async (req, res) => {
    try {
        const methodes = await Methode.find();
        res.json(methodes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/:nom', async (req, res) => {
    try {
        const methode = await Methode.findOne({ nom: req.params.nom })
        res.json(methode);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
