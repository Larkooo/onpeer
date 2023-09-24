import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyCommentArgs } from "./args/UpdateManyCommentArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyCommentResolver {
    updateManyComment(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCommentArgs): Promise<AffectedRowsOutput>;
}
