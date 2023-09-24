import type { GraphQLResolveInfo } from "graphql";
import { CreateOneCommentArgs } from "./args/CreateOneCommentArgs";
import { Comment } from "../../../models/Comment";
export declare class CreateOneCommentResolver {
    createOneComment(ctx: any, info: GraphQLResolveInfo, args: CreateOneCommentArgs): Promise<Comment>;
}
