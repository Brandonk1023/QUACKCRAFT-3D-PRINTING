// import the AuthenticationError class which is used to throw errors if a user is not logged in.
const { AuthenticationError } = require('apollo-server-express');

// import User, Filament, Printable models from the models directory so the data can be used by the resolvers.
const { User, Filament, Printable } = require('../models');

// import signToken function to create a JWT token that can be used to authenticate users
const { signToken } = require('../utils/auth.js');

// define resolvers object (this contains the resolvers for the different fields in the GraphQL schema)
/* 
REVIEW CLASS ACTIVITY FOR MORE GUIDANCE
*/
const resolvers = {
  Query: {},
};

// The Query type has resolvers for FINDING, READING, ETC.

// The Mutation type has resolvers for ADDING, UPDATING, ETC.

// NEED TO ADD A checkout resolver... 'a special resolver that is used to create a Stripe checkout session'

// export the resolvers object (This object will be used by the GraphQL server to resolve queries and mutations.)
module.exports = resolvers;
