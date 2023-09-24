import type { GraphQLResolveInfo } from "graphql";
import { FindFirstSyncOrThrowArgs } from "./args/FindFirstSyncOrThrowArgs";
import { Sync } from "../../../models/Sync";
export declare class FindFirstSyncOrThrowResolver {
    findFirstSyncOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstSyncOrThrowArgs): Promise<Sync | null>;
}
