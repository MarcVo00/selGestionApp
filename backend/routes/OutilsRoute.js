const express = require('express');
const router = express.Router();
const Outil = require('../models/OutilModel');  // Check this path is correct as per your structure

router.get('/', async (req, res) => {
    try {
        const outils = await Outil.find();
        res.json(outils);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/:nom', async (req, res) => {
    try {
        const outil = await Outil.findOne({ nom: req.params.nom })
        res.json(outil);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;