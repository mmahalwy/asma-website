/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: OwnerToTeamMutation
// ====================================================

export interface OwnerToTeamMutation_addOwnerToTeam_team {
  __typename: "Team";
  id: string;
}

export interface OwnerToTeamMutation_addOwnerToTeam {
  __typename: "AddOwnerToTeamPayload";
  team: OwnerToTeamMutation_addOwnerToTeam_team;
}

export interface OwnerToTeamMutation {
  addOwnerToTeam: OwnerToTeamMutation_addOwnerToTeam | null;
}

export interface OwnerToTeamMutationVariables {
  teamId: string;
  profileId: string;
}
