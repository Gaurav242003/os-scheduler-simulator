// backend/models/Process.js
const mongoose = require('mongoose');

const ProcessSchema = new mongoose.Schema({
    name: String,
    burstTime: Number,
    arrivalTime: Number,
    priority: Number, 
  
});

module.exports = mongoose.model('Process', ProcessSchema);
