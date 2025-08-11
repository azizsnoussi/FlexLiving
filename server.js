const express = require('express');
const app = express();

app.use(express.json());

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from standalone Express!' });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
