// import mongoose and express
const mongoose = require('mongoose');
const express = require('express');

// set up app and PORT
const app = express();
const PORT = process.env.PORT || 3001;

// import middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use routes folder
app.use(require('./routes'));

// set up database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// log mongoose queries
mongoose.set('debug', true);

// start server
app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));