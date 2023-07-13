// require the Mongoose (remember: Mongoose is the MongoDB Object Document Mapper for Node.js)
const mongoose = require('mongoose');

// following pattern for Product.js in 22.26 solved activity
// import the Schema class from mongoose module
const { Schema } = mongoose;

const filamentSchema = new Schema({
  filamentType: {
    type: String,
    required: true,
    trim: true,
  },
  printTemp: {
    type: String,
    required: true,
  },
  bedTemp: {
    type: String,
    required: true,
  },
  printSpeed: {
    type: String,
    required: true,
  },
  upVote: {
    type: Number,
    required: true,
  },
  downVote: {
    type: Number,
    required: true,
  },
});

const Filament = mongoose.model('Filament', filamentSchema);

module.exports = Filament;
