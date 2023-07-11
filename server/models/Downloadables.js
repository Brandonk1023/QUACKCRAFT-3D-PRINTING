// import mongoose

const mongoose = require('mongoose');

const { Schema } = mongoose;

const downloadablesSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
  downloadURL: {
    type: String,
    required: true,
  },
});

const Downloadables = mongoose.model('Downloadables', downloadablesSchema);

module.exports = Downloadables;
