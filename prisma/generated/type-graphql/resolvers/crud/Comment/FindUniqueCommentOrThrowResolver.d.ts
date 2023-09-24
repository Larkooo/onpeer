import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueCommentOrThrowArgs } from "./args/FindUniqueCommentOrThrowArgs";
import { Comment } from "../../../models/Comment";
export declare class FindUniqueCommentOrThrowResolver {
    getComment(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCommentOrThrowArgs): Promise<Comment | null>;
}
