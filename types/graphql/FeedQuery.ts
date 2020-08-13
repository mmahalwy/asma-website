/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TypeOfFeed } from "./globalTypes";

// ====================================================
// GraphQL query operation: FeedQuery
// ====================================================

export interface FeedQuery_feed_profiles {
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
  contributionsCount: number;
}

export interface FeedQuery_feed_team_profiles {
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

export interface FeedQuery_feed_team {
  __typename: "Team";
  id: string;
  profiles: FeedQuery_feed_team_profiles[];
}

export interface FeedQuery_feed {
  __typename: "Feed";
  id: string;
  title: string | null;
  website: string | null;
  iconUrl: string | null;
  type: TypeOfFeed;
  profiles: FeedQuery_feed_profiles[];
  team: FeedQuery_feed_team;
}

export interface FeedQuery {
  feed: FeedQuery_feed | null;
}

export interface FeedQueryVariables {
  id: string;
}
