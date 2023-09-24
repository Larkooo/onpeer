import type { GraphQLResolveInfo } from "graphql";
import { GroupBySyncArgs } from "./args/GroupBySyncArgs";
import { SyncGroupBy } from "../../outputs/SyncGroupBy";
export declare class GroupBySyncResolver {
    groupBySync(ctx: any, info: GraphQLResolveInfo, args: GroupBySyncArgs): Promise<SyncGroupBy[]>;
}
