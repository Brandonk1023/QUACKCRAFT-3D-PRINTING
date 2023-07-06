// import mongoose
const mongoose = require('mongoose');

// create connection
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/quackcraft-3D-printing',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// export connection
module.exports = mongoose.connection;
