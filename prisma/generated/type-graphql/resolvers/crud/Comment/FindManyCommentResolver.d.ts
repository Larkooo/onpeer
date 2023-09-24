import type { GraphQLResolveInfo } from "graphql";
import { FindManyCommentArgs } from "./args/FindManyCommentArgs";
import { Comment } from "../../../models/Comment";
export declare class FindManyCommentResolver {
    comments(ctx: any, info: GraphQLResolveInfo, args: FindManyCommentArgs): Promise<Comment[]>;
}
