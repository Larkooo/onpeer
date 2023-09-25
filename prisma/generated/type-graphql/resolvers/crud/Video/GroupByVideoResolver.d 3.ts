import type { GraphQLResolveInfo } from "graphql";
import { GroupByVideoArgs } from "./args/GroupByVideoArgs";
import { VideoGroupBy } from "../../outputs/VideoGroupBy";
export declare class GroupByVideoResolver {
    groupByVideo(ctx: any, info: GraphQLResolveInfo, args: GroupByVideoArgs): Promise<VideoGroupBy[]>;
}
