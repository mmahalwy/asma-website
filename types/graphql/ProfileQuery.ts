/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TypeOfFeed } from "./globalTypes";

// ====================================================
// GraphQL query operation: ProfileQuery
// ====================================================

export interface ProfileQuery_profile_teams {
  __typename: "Team";
  name: string | null;
}

export interface ProfileQuery_profile_feeds_feedEntries_profiles {
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

export interface ProfileQuery_profile_feeds_feedEntries {
  __typename: "FeedEntry";
  id: string;
  title: string | null;
  description: string | null;
  published: any | null;
  author: string | null;
  visual: any | null;
  imageUrl: string | null;
  alternateUrl: string | null;
  profiles: ProfileQuery_profile_feeds_feedEntries_profiles[];
}

export interface ProfileQuery_profile_feeds {
  __typename: "Feed";
  id: string;
  title: string | null;
  website: string | null;
  iconUrl: string | null;
  type: TypeOfFeed;
  feedEntries: ProfileQuery_profile_feeds_feedEntries[];
}

export interface ProfileQuery_profile {
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
  teams: ProfileQuery_profile_teams[];
  feeds: ProfileQuery_profile_feeds[];
}

export interface ProfileQuery {
  /**
   * Get profile
   */
  profile: ProfileQuery_profile | null;
}

export interface ProfileQueryVariables {
  id: string;
}
