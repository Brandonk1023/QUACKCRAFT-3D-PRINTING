// require the Mongoose (remember: Mongoose is the MongoDB Object Document Mapper for Node.js)
const mongoose = require('mongoose');

// following pattern for Product.js in 22.26 solved activity
// import the Schema class from mongoose module
const { Schema } = mongoose;

// create a new schema called userSchema with props from Schema model
/*
name
type
print temp
printer bed temp
print speed
  // DO WE NEED TO ASSIGN UNIQUE ID TO THIS SCHEMA?

*/
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
      type: Int,
      required: true,
  },
  downVote: {
    type: Int,
    required: true,
  },
  // DO WE NEED TO ASSIGN UNIQUE ID TO THIS SCHEMA?
});

const User = mongoose.model('Filament', filamentSchema);

module.exports = Filament;
