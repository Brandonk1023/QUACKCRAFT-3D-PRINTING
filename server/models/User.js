// require the Mongoose (remember: Mongoose is the MongoDB Object Document Mapper for Node.js)
const mongoose = require('mongoose');

// import the Schema class from mongoose module
const { Schema } = mongoose;

// require bcrypt (password hashing)
const bcrypt = require('bcrypt');

// create a new schema called userSchema with props from Schema model
const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    trim: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Email must match email on file!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
});

// set up pre-save middleware to create hashed password BEFORE user data is saved to the database, so the pw is stored securely.
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// method to compare the incoming pw with hashed pw stored in the database
userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// User model is created by calling the mongoose.model() function, which takes in 2 arguments: the name of the model and the schema definition.
const User = mongoose.model('User', userSchema);

module.exports = User;
