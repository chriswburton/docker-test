const express = require('express');
const app = new express();

app.get('/', (req, res) => {
  res.json({ message: 'app one' });
})

app.listen(3000, () => console.log('Listening'));