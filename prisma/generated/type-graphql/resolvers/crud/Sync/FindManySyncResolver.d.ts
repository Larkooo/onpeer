import type { GraphQLResolveInfo } from "graphql";
import { FindManySyncArgs } from "./args/FindManySyncArgs";
import { Sync } from "../../../models/Sync";
export declare class FindManySyncResolver {
    syncs(ctx: any, info: GraphQLResolveInfo, args: FindManySyncArgs): Promise<Sync[]>;
}
