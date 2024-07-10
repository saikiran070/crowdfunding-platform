// server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/crowdfunding', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
