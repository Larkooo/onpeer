/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetVideo
// ====================================================

export interface GetVideo_video_author {
  __typename: "User";
  id: string;
}

export interface GetVideo_video_likes {
  __typename: "Like";
  userId: string;
}

export interface GetVideo_video_comments {
  __typename: "Comment";
  id: string;
  userId: string;
  text: string;
  tx: string;
}

export interface GetVideo_video {
  __typename: "Video";
  id: string;
  title: string;
  description: string;
  tokenId: string | null;
  mintTx: string | null;
  createdAt: any;
  playbackId: string;
  author: GetVideo_video_author;
  likes: GetVideo_video_likes[];
  comments: GetVideo_video_comments[];
}

export interface GetVideo {
  video: GetVideo_video | null;
}

export interface GetVideoVariables {
  id: string;
}
