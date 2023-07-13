// import the AuthenticationError class which is used to throw errors if a user is not logged in.
const { AuthenticationError } = require('apollo-server-express');

// import User, Filament, Downloadables models from the models directory so the data can be used by the resolvers.
// LIL TODO: need to write resolvers for Filament and Downloadables!
const { User, Filament, Downloadables } = require('../models');

// import signToken function to create a JWT token that can be used to authenticate users
const { signToken } = require('../utils/auth.js');
// import Stripe and the test secret API key
const stripe = require('stripe')(process.env.STRIPEKEY);

// define resolvers object (this contains the resolvers for the different fields in the GraphQL schema)

const resolvers = {
  // The Query type has resolvers for FINDING, READING, ETC.
  Query: {
    user: async (parent, { userId }) => {
      const params = userId ? { _id: userId } : {};
      return User.find(params);
    },
    // FROM CLASS EXAMPLE: By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    // LIL TODO: checkout resolver... 'a special resolver that is used to create a Stripe checkout session'
    // Note to all: Stripe expects price amounts in cents so we need to add the * 100
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const donation = args.donation;
      const line_items = [
        {
          price: donation.amount * 100,
          currency: 'usd',
          quantity: 1,
        },
      ];

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
    },
  },
  // The Mutation type has resolvers for LOGIN, ADDING, UPDATING, ETC.
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
};

// export the resolvers object (This object will be used by the GraphQL server to resolve queries and mutations.)
module.exports = resolvers;