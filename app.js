const express = require('express');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();
app.use(express.json());

app.use('/api/reviews', reviewRoutes);

app.get('/', (req, res) => res.send('API is running!'));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
