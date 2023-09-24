import type { GraphQLResolveInfo } from "graphql";
import { FindFirstCommentOrThrowArgs } from "./args/FindFirstCommentOrThrowArgs";
import { Comment } from "../../../models/Comment";
export declare class FindFirstCommentOrThrowResolver {
    findFirstCommentOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstCommentOrThrowArgs): Promise<Comment | null>;
}
