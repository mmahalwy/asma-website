/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateTeamMutation
// ====================================================

export interface UpdateTeamMutation_updateTeam {
  __typename: "Team";
  id: string;
}

export interface UpdateTeamMutation {
  updateTeam: UpdateTeamMutation_updateTeam | null;
}

export interface UpdateTeamMutationVariables {
  id: string;
  name?: string | null;
}
