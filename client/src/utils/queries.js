import { gql } from '@apollo/client'

export const QUERY_FILAMENT = gql`
  query filament {
    filament {
      _id
      filamentType
      printTemp
      bedTemp
      PrintSpeed
    }
  }
`

export const QUERY_DOWNLOADABLES = gql`
  query downloadables {
    downloadables {
      _id
      title
      content
      downloadURL
    }
  }
`

export const QUERY_USER = gql`
  query allUsers {
    users {
      _id
      userName
      firstName
      lastName
      email
    }
  }
`

export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      userName
      firstName
      lastName
      email
    }
  }
`
