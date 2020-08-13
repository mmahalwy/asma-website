/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ViewerQuery
// ====================================================

export interface ViewerQuery_viewer {
  __typename: "User";
  id: string;
  name: string | null;
  role: number;
  inviteCode: string | null;
}

export interface ViewerQuery {
  /**
   * Get viewer
   */
  viewer: ViewerQuery_viewer | null;
}
