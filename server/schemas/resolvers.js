// import the AuthenticationError class which is used to throw errors if a user is not logged in.
const { AuthenticationError } = require('apollo-server-express');

// import User, Filament, PrintableFile models from the models directory so the data can be used by the resolvers.
const { User, Filament, PrintableFile } = require('../models');

// import signToken function to create a JWT token that can be used to authenticate users
const { signToken } = require('../utils/auth.js');

// define resolvers object (this contains the resolvers for the different fields in the GraphQL schema)
/* 
REVIEW CLASS ACTIVITY FOR MORE GUIDANCE
*/
const resolvers = {
  // The Query type has resolvers for FINDING, READING, ETC.
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, { userId }) => {
      const params = userId ? { _id: userId } : {};
      return User.findOne(params);
    },
    // FROM CLASS EXAMPLE: By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
  // The Mutation type has resolvers for ADDING, UPDATING, ETC.
  Mutation: {
    addUser: async (parent, { name, email, password }) => {
      const user = await User.create({ name, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user with this email found!');
      }

      const correctPw = await User.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },
  },
  // NEED TO ADD A checkout resolver... 'a special resolver that is used to create a Stripe checkout session'
};

// export the resolvers object (This object will be used by the GraphQL server to resolve queries and mutations.)
module.exports = resolvers;
