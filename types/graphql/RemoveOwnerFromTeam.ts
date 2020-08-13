/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RemoveOwnerFromTeam
// ====================================================

export interface RemoveOwnerFromTeam_removeOwnerFromTeam_team {
  __typename: "Team";
  id: string;
}

export interface RemoveOwnerFromTeam_removeOwnerFromTeam {
  __typename: "RemoveOwnerFromTeamPayload";
  team: RemoveOwnerFromTeam_removeOwnerFromTeam_team;
}

export interface RemoveOwnerFromTeam {
  removeOwnerFromTeam: RemoveOwnerFromTeam_removeOwnerFromTeam | null;
}

export interface RemoveOwnerFromTeamVariables {
  teamId: string;
  profileId: string;
}
