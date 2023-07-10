// import gql function from apollo server express so we can utilize template literal to wrap GraphQL strings
const { gql } = require('apollo-server-express');

// NEED TODO: Add Downloadables typeDef and add related Queries and Mutations
const typeDefs = gql`
  type User {
    _id: ID!
    userName: String
    firstName: String
    lastName: String
    email: String
  }

  type Filament {
    _id: ID!
    filamentType: String
    printTemp: String
    bedTemp: String
    printSpeed: String
    upVote: Int
    downVote: Int
  }

  type Downloadables {
    Title: String
    Content: String
    DownloadURL: String
  }

  type Auth {
    token: ID!
    user: User!
  }

  type Query {
    user(userId: ID): [User]
    me: User
  }

  type Mutation {
    addUser(
      userName: String!
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    login(email: String!, password: String!): Auth
    deleteUser(userId: ID): User
  }
`;

// export module so it can be used
module.exports = typeDefs;
