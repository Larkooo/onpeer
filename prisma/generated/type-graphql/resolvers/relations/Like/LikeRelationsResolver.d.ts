import type { GraphQLResolveInfo } from "graphql";
import { Like } from "../../../models/Like";
import { User } from "../../../models/User";
import { Video } from "../../../models/Video";
export declare class LikeRelationsResolver {
    user(like: Like, ctx: any, info: GraphQLResolveInfo): Promise<User>;
    video(like: Like, ctx: any, info: GraphQLResolveInfo): Promise<Video>;
}
