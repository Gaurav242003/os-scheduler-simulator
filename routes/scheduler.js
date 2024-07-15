// backend/routes/scheduler.js
const express = require('express');
const { simulateFCFS } = require('../scheduler');
const router = express.Router();

router.get('/fcfs', async (req, res) => {
    try {
        const result = await simulateFCFS();
        res.status(200).send(result);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
