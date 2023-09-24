import type { GraphQLResolveInfo } from "graphql";
import { Comment } from "../../../models/Comment";
import { User } from "../../../models/User";
import { Video } from "../../../models/Video";
export declare class CommentRelationsResolver {
    user(comment: Comment, ctx: any, info: GraphQLResolveInfo): Promise<User>;
    video(comment: Comment, ctx: any, info: GraphQLResolveInfo): Promise<Video>;
}
