import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyLikeArgs } from "./args/UpdateManyLikeArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyLikeResolver {
    updateManyLike(ctx: any, info: GraphQLResolveInfo, args: UpdateManyLikeArgs): Promise<AffectedRowsOutput>;
}
