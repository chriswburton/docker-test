const express = require('express');
const app = new express();

app.get('/', (req, res) => {
  res.json({ message: 'app two' });
})

app.listen(3001, () => console.log('Listening'));