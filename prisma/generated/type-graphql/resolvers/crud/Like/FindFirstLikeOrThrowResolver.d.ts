import type { GraphQLResolveInfo } from "graphql";
import { FindFirstLikeOrThrowArgs } from "./args/FindFirstLikeOrThrowArgs";
import { Like } from "../../../models/Like";
export declare class FindFirstLikeOrThrowResolver {
    findFirstLikeOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstLikeOrThrowArgs): Promise<Like | null>;
}
