/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateProfileForTeamMutation
// ====================================================

export interface CreateProfileForTeamMutation_createProfileForTeam {
  __typename: "Profile";
  id: string;
}

export interface CreateProfileForTeamMutation {
  createProfileForTeam: CreateProfileForTeamMutation_createProfileForTeam | null;
}

export interface CreateProfileForTeamMutationVariables {
  teamId: string;
  firstName: string;
  lastName: string;
  imageUrl?: string | null;
  verified?: boolean | null;
  live?: boolean | null;
}
