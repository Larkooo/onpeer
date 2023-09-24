import type { GraphQLResolveInfo } from "graphql";
import { CreateOneSyncArgs } from "./args/CreateOneSyncArgs";
import { Sync } from "../../../models/Sync";
export declare class CreateOneSyncResolver {
    createOneSync(ctx: any, info: GraphQLResolveInfo, args: CreateOneSyncArgs): Promise<Sync>;
}
