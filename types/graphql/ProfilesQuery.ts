/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProfilesQuery
// ====================================================

export interface ProfilesQuery_profiles {
  __typename: "Profile";
  id: string;
  firstName: string | null;
  lastName: string | null;
  name: string | null;
  imageUrl: string | null;
  location: string | null;
  shortBio: string | null;
  slug: string;
  verified: boolean;
  live: boolean;
  tags: string[] | null;
}

export interface ProfilesQuery {
  profiles: ProfilesQuery_profiles[];
}
