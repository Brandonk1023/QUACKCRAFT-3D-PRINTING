import { gql } from '@apollo/client'

export const ADD_USER = gql`
  mutation addUser(
    $userName: String!
    $firstName: String!
    $lastName: String!
    $email: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      userName: $userName
      email: $email
    ) {
      token
      profile {
        _id
        userName
      }
    }
  }
`

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        userName
      }
    }
  }
`

// LIL TODO: following the class example... not sure about password and confirmpass... is ADD_USER enough?
// export const REGISTER_USER = gql`
//   mutation login($firstName: String!, $lastName: String! $userName: String! $email: String!, $password: String! $confirmpass: String!) {
//     login(firstName: $firstName, lastName: $lastName, userName: $userName, email: $email, password: $password, confirmpass: $confirmpass) {
//       token
//       profile {
//         _id
//         userName
//       }
//     }
//   }
// `;
