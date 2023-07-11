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
`;

export const QUERY_DOWNLOADABLES = gql`
  query downloadables {
    downloadables {
        _id
        title
        content
        downloadURL
    }
  }
`;

// export const QUERY_PROFILES = gql`
//   query allProfiles {
//     profiles {
//       _id
//       name
//       skills
//     }
//   }
// `;

// export const QUERY_SINGLE_PROFILE = gql`
//   query singleProfile($profileId: ID!) {
//     profile(profileId: $profileId) {
//       _id
//       name
//       skills
//     }
//   }
// `;
