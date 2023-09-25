import type { GraphQLResolveInfo } from "graphql";
import { FindFirstSyncArgs } from "./args/FindFirstSyncArgs";
import { Sync } from "../../../models/Sync";
export declare class FindFirstSyncResolver {
    findFirstSync(ctx: any, info: GraphQLResolveInfo, args: FindFirstSyncArgs): Promise<Sync | null>;
}
