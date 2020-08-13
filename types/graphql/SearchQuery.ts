/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SearchQuery
// ====================================================

export interface SearchQuery_searchFeedEntries_results_feed {
  __typename: "Feed";
  title: string | null;
  website: string | null;
  iconUrl: string | null;
}

export interface SearchQuery_searchFeedEntries_results_profiles {
  __typename: "Profile";
  name: string | null;
  slug: string;
  imageUrl: string | null;
}

export interface SearchQuery_searchFeedEntries_results {
  __typename: "FeedEntry";
  id: string;
  title: string | null;
  description: string | null;
  published: any | null;
  author: string | null;
  alternateUrl: string | null;
  keywords: string[] | null;
  feed: SearchQuery_searchFeedEntries_results_feed;
  profiles: SearchQuery_searchFeedEntries_results_profiles[];
}

export interface SearchQuery_searchFeedEntries {
  __typename: "SearchResults";
  query: string | null;
  nbHits: number;
  page: number;
  hitsPerPage: number | null;
  results: SearchQuery_searchFeedEntries_results[];
}

export interface SearchQuery {
  /**
   * Search feed entries
   */
  searchFeedEntries: SearchQuery_searchFeedEntries;
}

export interface SearchQueryVariables {
  q: string;
  p?: number | null;
}
