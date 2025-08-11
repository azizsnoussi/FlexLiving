const express = require('express');
const serverless = require('serverless-http');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();
app.use(express.json());

app.use('/reviews', reviewRoutes);

module.exports = app;
module.exports.handler = serverless(app);
