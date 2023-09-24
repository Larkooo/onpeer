import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneLikeArgs } from "./args/UpsertOneLikeArgs";
import { Like } from "../../../models/Like";
export declare class UpsertOneLikeResolver {
    upsertOneLike(ctx: any, info: GraphQLResolveInfo, args: UpsertOneLikeArgs): Promise<Like>;
}
