import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneSyncArgs } from "./args/DeleteOneSyncArgs";
import { Sync } from "../../../models/Sync";
export declare class DeleteOneSyncResolver {
    deleteOneSync(ctx: any, info: GraphQLResolveInfo, args: DeleteOneSyncArgs): Promise<Sync | null>;
}
