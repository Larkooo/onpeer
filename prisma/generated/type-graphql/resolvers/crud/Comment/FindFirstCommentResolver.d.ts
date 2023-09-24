import type { GraphQLResolveInfo } from "graphql";
import { FindFirstCommentArgs } from "./args/FindFirstCommentArgs";
import { Comment } from "../../../models/Comment";
export declare class FindFirstCommentResolver {
    findFirstComment(ctx: any, info: GraphQLResolveInfo, args: FindFirstCommentArgs): Promise<Comment | null>;
}
