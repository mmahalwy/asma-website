/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: InviteCodeQuery
// ====================================================

export interface InviteCodeQuery_inviteCode {
  __typename: "InviteCode";
  userId: number | null;
  valid: boolean;
  name: string | null;
}

export interface InviteCodeQuery {
  /**
   * Returns whether invite code is valid or not
   */
  inviteCode: InviteCodeQuery_inviteCode | null;
}

export interface InviteCodeQueryVariables {
  code: string;
}
