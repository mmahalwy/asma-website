/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: WorkfiendsQuery
// ====================================================

export interface WorkfiendsQuery_profile_workfriends {
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

export interface WorkfiendsQuery_profile {
  __typename: "Profile";
  workfriends: WorkfiendsQuery_profile_workfriends[];
}

export interface WorkfiendsQuery {
  /**
   * Get profile
   */
  profile: WorkfiendsQuery_profile | null;
}

export interface WorkfiendsQueryVariables {
  id: string;
}
