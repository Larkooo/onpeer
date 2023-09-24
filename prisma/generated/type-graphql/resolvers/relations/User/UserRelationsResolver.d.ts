import type { GraphQLResolveInfo } from "graphql";
import { Comment } from "../../../models/Comment";
import { Like } from "../../../models/Like";
import { User } from "../../../models/User";
import { Video } from "../../../models/Video";
import { UserCommentsArgs } from "./args/UserCommentsArgs";
import { UserLikesArgs } from "./args/UserLikesArgs";
import { UserVideosArgs } from "./args/UserVideosArgs";
export declare class UserRelationsResolver {
    videos(user: User, ctx: any, info: GraphQLResolveInfo, args: UserVideosArgs): Promise<Video[]>;
    comments(user: User, ctx: any, info: GraphQLResolveInfo, args: UserCommentsArgs): Promise<Comment[]>;
    likes(user: User, ctx: any, info: GraphQLResolveInfo, args: UserLikesArgs): Promise<Like[]>;
}
