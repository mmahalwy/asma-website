/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TypeOfFeed } from "./globalTypes";

// ====================================================
// GraphQL query operation: ContributionsQuery
// ====================================================

export interface ContributionsQuery_contributions_feed_team_profiles {
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

export interface ContributionsQuery_contributions_feed_team {
  __typename: "Team";
  profiles: ContributionsQuery_contributions_feed_team_profiles[];
}

export interface ContributionsQuery_contributions_feed {
  __typename: "Feed";
  id: string;
  title: string | null;
  website: string | null;
  iconUrl: string | null;
  type: TypeOfFeed;
  team: ContributionsQuery_contributions_feed_team;
}

export interface ContributionsQuery_contributions_profiles {
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

export interface ContributionsQuery_contributions {
  __typename: "FeedEntry";
  id: string;
  title: string | null;
  description: string | null;
  published: any | null;
  author: string | null;
  visual: any | null;
  imageUrl: string | null;
  alternateUrl: string | null;
  feed: ContributionsQuery_contributions_feed;
  profiles: ContributionsQuery_contributions_profiles[];
}

export interface ContributionsQuery {
  /**
   * Contributions for a profile
   */
  contributions: ContributionsQuery_contributions[];
}

export interface ContributionsQueryVariables {
  id: string;
}
