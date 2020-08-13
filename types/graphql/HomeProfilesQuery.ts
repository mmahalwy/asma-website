/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HomeProfilesQuery
// ====================================================

export interface HomeProfilesQuery_homeProfiles_teams {
  __typename: "Team";
  name: string | null;
}

export interface HomeProfilesQuery_homeProfiles {
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
  teams: HomeProfilesQuery_homeProfiles_teams[];
}

export interface HomeProfilesQuery {
  homeProfiles: HomeProfilesQuery_homeProfiles[];
}
