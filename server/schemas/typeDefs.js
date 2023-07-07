// import gql function from apollo server express so we can utilize template literal to wrap GraphQL strings
const { gql } = require('apollo-server-express');

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

type PrintableFile {
                            /*
                            ADD HERE
                            */
}

type Auth {
  token: ID!
  user: User!
  }

type Query {
  users: [User]
  user(userId: ID): [User]
  me: User
                            /*
                            ADD OTHER QUERIES HERE -, fetching, reading data
                            */

}

type Mutation {
  addUser(userName: String!, firstName: String!, lastName: String!, email: String!, password: String!)
  login(email: String!, password: String!): Auth
  deleteUser(userId: ID): User
                            /*
                            ADD MUTATIONS HERE -, create, update--what gets updated?, delete, etc.
                            */
}
`;

// export module so it can be used
module.exports = typeDefs;
cd;
