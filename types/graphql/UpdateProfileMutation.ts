/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateProfileMutation
// ====================================================

export interface UpdateProfileMutation_updateProfile {
  __typename: "Profile";
  id: string;
}

export interface UpdateProfileMutation {
  updateProfile: UpdateProfileMutation_updateProfile | null;
}

export interface UpdateProfileMutationVariables {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  imageUrl?: string | null;
  verified?: boolean | null;
  live?: boolean | null;
}
