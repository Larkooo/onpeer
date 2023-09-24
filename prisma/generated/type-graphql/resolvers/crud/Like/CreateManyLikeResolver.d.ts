import type { GraphQLResolveInfo } from "graphql";
import { CreateManyLikeArgs } from "./args/CreateManyLikeArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyLikeResolver {
    createManyLike(ctx: any, info: GraphQLResolveInfo, args: CreateManyLikeArgs): Promise<AffectedRowsOutput>;
}
