const express = require('express');
const serverless = require('serverless-http');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();
app.use(express.json());

// Routes
app.use('/reviews', reviewRoutes);

// Export as serverless function
module.exports = app;
module.exports.handler = serverless(app);
