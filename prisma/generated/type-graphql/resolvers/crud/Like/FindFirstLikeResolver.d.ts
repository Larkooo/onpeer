import type { GraphQLResolveInfo } from "graphql";
import { FindFirstLikeArgs } from "./args/FindFirstLikeArgs";
import { Like } from "../../../models/Like";
export declare class FindFirstLikeResolver {
    findFirstLike(ctx: any, info: GraphQLResolveInfo, args: FindFirstLikeArgs): Promise<Like | null>;
}
