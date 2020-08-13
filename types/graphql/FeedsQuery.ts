/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TypeOfFeed } from "./globalTypes";

// ====================================================
// GraphQL query operation: FeedsQuery
// ====================================================

export interface FeedsQuery_feeds_team {
  __typename: "Team";
  name: string | null;
}

export interface FeedsQuery_feeds {
  __typename: "Feed";
  id: string;
  title: string | null;
  website: string | null;
  iconUrl: string | null;
  type: TypeOfFeed;
  team: FeedsQuery_feeds_team;
}

export interface FeedsQuery {
  feeds: FeedsQuery_feeds[];
}
