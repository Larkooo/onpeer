import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueSyncOrThrowArgs } from "./args/FindUniqueSyncOrThrowArgs";
import { Sync } from "../../../models/Sync";
export declare class FindUniqueSyncOrThrowResolver {
    getSync(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSyncOrThrowArgs): Promise<Sync | null>;
}
