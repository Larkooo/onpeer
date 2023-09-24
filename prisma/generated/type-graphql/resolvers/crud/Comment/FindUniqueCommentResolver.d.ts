import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueCommentArgs } from "./args/FindUniqueCommentArgs";
import { Comment } from "../../../models/Comment";
export declare class FindUniqueCommentResolver {
    comment(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCommentArgs): Promise<Comment | null>;
}
