/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateFeedMutation
// ====================================================

export interface UpdateFeedMutation_updateFeed {
  __typename: "Feed";
  id: string;
}

export interface UpdateFeedMutation {
  updateFeed: UpdateFeedMutation_updateFeed | null;
}

export interface UpdateFeedMutationVariables {
  id: string;
  title?: string | null;
}
