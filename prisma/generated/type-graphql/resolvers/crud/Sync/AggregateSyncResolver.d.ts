import type { GraphQLResolveInfo } from "graphql";
import { AggregateSyncArgs } from "./args/AggregateSyncArgs";
import { AggregateSync } from "../../outputs/AggregateSync";
export declare class AggregateSyncResolver {
    aggregateSync(ctx: any, info: GraphQLResolveInfo, args: AggregateSyncArgs): Promise<AggregateSync>;
}
