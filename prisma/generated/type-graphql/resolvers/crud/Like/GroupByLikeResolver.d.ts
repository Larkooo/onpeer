import type { GraphQLResolveInfo } from "graphql";
import { GroupByLikeArgs } from "./args/GroupByLikeArgs";
import { LikeGroupBy } from "../../outputs/LikeGroupBy";
export declare class GroupByLikeResolver {
    groupByLike(ctx: any, info: GraphQLResolveInfo, args: GroupByLikeArgs): Promise<LikeGroupBy[]>;
}
