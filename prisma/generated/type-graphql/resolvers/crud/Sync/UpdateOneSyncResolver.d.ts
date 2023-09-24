import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneSyncArgs } from "./args/UpdateOneSyncArgs";
import { Sync } from "../../../models/Sync";
export declare class UpdateOneSyncResolver {
    updateOneSync(ctx: any, info: GraphQLResolveInfo, args: UpdateOneSyncArgs): Promise<Sync | null>;
}
