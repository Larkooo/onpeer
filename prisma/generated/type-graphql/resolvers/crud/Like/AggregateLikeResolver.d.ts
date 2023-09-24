import type { GraphQLResolveInfo } from "graphql";
import { AggregateLikeArgs } from "./args/AggregateLikeArgs";
import { AggregateLike } from "../../outputs/AggregateLike";
export declare class AggregateLikeResolver {
    aggregateLike(ctx: any, info: GraphQLResolveInfo, args: AggregateLikeArgs): Promise<AggregateLike>;
}
