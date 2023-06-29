// import gql function from apollo server express so we can utilize template literal to wrap GraphQL strings
const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
  _id: ID
  userName: String
  firstName: String
  lastName: String
  email: String
}

type Filament {
  _id: ID
  filamentType: String
  printTemp: String
  bedTemp: String
  printSpeed: String
  upVote: Int
  downVote: Int
}

type PrintableFile {

}

type Auth {
  token: ID
  user: User
  }

type Query {
  user(userId: ID): [User]
                            /*
                            ADD OTHER QUERIES HERE
                            */

}

type Mutation {
  addUser()
  login()
                            /*
                            ADD MUTATIONS HERE - add, update, delete, etc.
                            */
}
`;

// export module so it can be used
module.exports = typeDefs;
