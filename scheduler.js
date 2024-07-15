// backend/scheduler.js
const Process = require('./models/Process');

const simulateFCFS = async () => {
    const processes = await Process.find().sort({ arrivalTime: 1 });
    let currentTime = 0;
    const result = processes.map((process) => {
        const startTime = Math.max(currentTime, process.arrivalTime);
        const endTime = startTime + process.burstTime;
        currentTime = endTime;
        return {
            ...process._doc,
            startTime,
            endTime,
            progress: 0 // Initialize progress
        };
    });
    return result;
};

module.exports = { simulateFCFS };
