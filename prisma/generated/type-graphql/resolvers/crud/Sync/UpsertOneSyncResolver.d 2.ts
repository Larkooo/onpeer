import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneSyncArgs } from "./args/UpsertOneSyncArgs";
import { Sync } from "../../../models/Sync";
export declare class UpsertOneSyncResolver {
    upsertOneSync(ctx: any, info: GraphQLResolveInfo, args: UpsertOneSyncArgs): Promise<Sync>;
}
