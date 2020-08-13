/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TeamsQuery
// ====================================================

export interface TeamsQuery_teams {
  __typename: "Team";
  id: string;
  name: string | null;
}

export interface TeamsQuery {
  teams: TeamsQuery_teams[];
}
