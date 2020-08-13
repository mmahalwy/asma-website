/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateFeedForTeam
// ====================================================

export interface CreateFeedForTeam_createFeedForTeam {
  __typename: "Feed";
  id: string;
}

export interface CreateFeedForTeam {
  createFeedForTeam: CreateFeedForTeam_createFeedForTeam | null;
}

export interface CreateFeedForTeamVariables {
  teamId: string;
  url: string;
  type: string;
}
