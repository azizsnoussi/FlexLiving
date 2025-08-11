const express = require('express');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();
app.use(express.json());

app.use('/reviews', reviewRoutes);

app.listen(4000,console.log("Server started on port 4000"));