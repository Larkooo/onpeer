import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyCommentArgs } from "./args/DeleteManyCommentArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyCommentResolver {
    deleteManyComment(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCommentArgs): Promise<AffectedRowsOutput>;
}
