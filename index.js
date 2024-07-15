// backend/index.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(`mongodb+srv://royalgk2:${process.env.MONGO_PASS}@operatingsystem.pdn0vc2.mongodb.net/?retryWrites=true&w=majority&appName=OperatingSystem`)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
