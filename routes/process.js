// backend/routes/process.js
const express = require('express');
const router = express.Router();
const Process = require('../models/Process');

// Create a new process
router.post('/', async (req, res) => {
    try {
        const process = new Process(req.body);
        await process.save();
        console.log("saved");
        res.status(201).send(process);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all processes
router.get('/', async (req, res) => {
    try {
        const processes = await Process.find();
        res.status(200).send(processes);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Update and delete routes can also be added

module.exports = router;
