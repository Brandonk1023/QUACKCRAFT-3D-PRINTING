// import gql function from apollo server express so we can utilize template literal to wrap GraphQL strings
const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
                            /*
                            id?
                            firstName
                            lastName
                            email
                            password
                            */
}

type Filament {

}

type Printable {

}

type Auth {
  token: ID
  user: User
  }

type Query {
  user: User
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
