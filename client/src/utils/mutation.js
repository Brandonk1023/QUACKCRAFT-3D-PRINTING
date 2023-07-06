// import { gql } from '@apollo/client';

// export const ADD_PROFILE = gql`
//   mutation addProfile($name: String!, $email: String!, $password: String!) {
//     addProfile(name: $name, email: $email, password: $password) {
//       token
//       profile {
//         _id
//         name
//       }
//     }
//   }
// `;

// export const ADD_SKILL = gql`
//   mutation addSkill($profileId: ID!, $skill: String!) {
//     addSkill(profileId: $profileId, skill: $skill) {
//       _id
//       name
//       skills
//     }
//   }
// `;

// export const LOGIN_USER = gql`
//   mutation login($email: String!, $password: String!) {
//     login(email: $email, password: $password) {
//       token
//       profile {
//         _id
//         name
//       }
//     }
//   }
// `;

// export const REGISTER_USER = gql`
//   mutation login($firstname: String!, $lastname: String! $username: String! $email: String!, $password: String! $confirmpass: String!) {
//     login(firstname: $firstname, lastname: $lastname, username: $username, email: $email, password: $password, confirmpass: $confirmpass) {
//       token
//       profile {
//         _id
//         name
//       }
//     }
//   }
// `;