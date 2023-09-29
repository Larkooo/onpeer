/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetVideoLikesComments
// ====================================================

export interface GetVideoLikesComments_likes {
  __typename: "Like";
  userId: string;
  tx: string;
}

export interface GetVideoLikesComments_comments {
  __typename: "Comment";
  id: string;
  userId: string;
  text: string;
  tx: string;
}

export interface GetVideoLikesComments {
  likes: GetVideoLikesComments_likes[];
  comments: GetVideoLikesComments_comments[];
}

export interface GetVideoLikesCommentsVariables {
  id: string;
}
