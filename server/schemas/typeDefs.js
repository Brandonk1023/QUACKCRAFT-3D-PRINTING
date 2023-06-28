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
`;

// export module so it can be used
module.exports = typeDefs;
