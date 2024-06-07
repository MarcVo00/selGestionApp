// backend/routes/methodologies.js
const express = require('express');
const router = express.Router();
const Methodology = require('../models/Methodology');  // Check this path is correct as per your structure

router.get('/', async (req, res) => {
    try {
        const methodologies = await Methodology.find();
        res.json(methodologies);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
