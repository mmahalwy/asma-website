/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TypeOfFeed } from "./globalTypes";

// ====================================================
// GraphQL query operation: TeamQuery
// ====================================================

export interface TeamQuery_team_feeds {
  __typename: "Feed";
  id: string;
  title: string | null;
  type: TypeOfFeed;
}

export interface TeamQuery_team {
  __typename: "Team";
  id: string;
  name: string | null;
  feeds: TeamQuery_team_feeds[];
}

export interface TeamQuery {
  team: TeamQuery_team | null;
}

export interface TeamQueryVariables {
  id: string;
}
