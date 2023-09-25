import type { GraphQLResolveInfo } from "graphql";
import { AggregateVideoArgs } from "./args/AggregateVideoArgs";
import { AggregateVideo } from "../../outputs/AggregateVideo";
export declare class AggregateVideoResolver {
    aggregateVideo(ctx: any, info: GraphQLResolveInfo, args: AggregateVideoArgs): Promise<AggregateVideo>;
}
