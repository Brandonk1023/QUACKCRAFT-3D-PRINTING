// import mongoose

const mongoose = require('mongoose');

const { Schema } = mongoose;

const downloadablesSchema = new Schema({
  Title: {
    type: String,
    required: true,
    trim: true,
  },
  Content: {
    type: String,
    required: true,
    trim: true,
  },
  DownloadURL: {
    type: String,
    required: true,
  },
});

const Downloadables = mongoose.model('Downloadables', downloadablesSchema);

module.exports = Downloadables;
