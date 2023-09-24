import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneCommentArgs } from "./args/UpsertOneCommentArgs";
import { Comment } from "../../../models/Comment";
export declare class UpsertOneCommentResolver {
    upsertOneComment(ctx: any, info: GraphQLResolveInfo, args: UpsertOneCommentArgs): Promise<Comment>;
}
