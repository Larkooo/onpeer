import type { GraphQLResolveInfo } from "graphql";
import { Comment } from "../../../models/Comment";
import { Like } from "../../../models/Like";
import { User } from "../../../models/User";
import { Video } from "../../../models/Video";
import { VideoCommentsArgs } from "./args/VideoCommentsArgs";
import { VideoLikesArgs } from "./args/VideoLikesArgs";
export declare class VideoRelationsResolver {
    author(video: Video, ctx: any, info: GraphQLResolveInfo): Promise<User>;
    comments(video: Video, ctx: any, info: GraphQLResolveInfo, args: VideoCommentsArgs): Promise<Comment[]>;
    likes(video: Video, ctx: any, info: GraphQLResolveInfo, args: VideoLikesArgs): Promise<Like[]>;
}
