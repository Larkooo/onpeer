import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneCommentArgs } from "./args/DeleteOneCommentArgs";
import { Comment } from "../../../models/Comment";
export declare class DeleteOneCommentResolver {
    deleteOneComment(ctx: any, info: GraphQLResolveInfo, args: DeleteOneCommentArgs): Promise<Comment | null>;
}
