import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneCommentArgs } from "./args/UpdateOneCommentArgs";
import { Comment } from "../../../models/Comment";
export declare class UpdateOneCommentResolver {
    updateOneComment(ctx: any, info: GraphQLResolveInfo, args: UpdateOneCommentArgs): Promise<Comment | null>;
}
