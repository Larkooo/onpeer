import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueSyncArgs } from "./args/FindUniqueSyncArgs";
import { Sync } from "../../../models/Sync";
export declare class FindUniqueSyncResolver {
    sync(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSyncArgs): Promise<Sync | null>;
}
