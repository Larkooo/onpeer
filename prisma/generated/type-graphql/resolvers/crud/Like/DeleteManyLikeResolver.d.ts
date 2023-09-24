import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyLikeArgs } from "./args/DeleteManyLikeArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyLikeResolver {
    deleteManyLike(ctx: any, info: GraphQLResolveInfo, args: DeleteManyLikeArgs): Promise<AffectedRowsOutput>;
}
