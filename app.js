const express = require('express');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();
app.use(express.json());

app.use('/api/reviews', reviewRoutes);

app.get('/', (req, res) => res.send('API is running!'));

module.exports = app;