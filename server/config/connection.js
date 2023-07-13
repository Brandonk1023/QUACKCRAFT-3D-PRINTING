// import mongoose
const mongoose = require('mongoose');
require('dotenv').config();

// create connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// export connection
module.exports = mongoose.connection;
