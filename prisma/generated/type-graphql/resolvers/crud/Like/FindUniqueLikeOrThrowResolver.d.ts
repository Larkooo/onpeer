import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueLikeOrThrowArgs } from "./args/FindUniqueLikeOrThrowArgs";
import { Like } from "../../../models/Like";
export declare class FindUniqueLikeOrThrowResolver {
    getLike(ctx: any, info: GraphQLResolveInfo, args: FindUniqueLikeOrThrowArgs): Promise<Like | null>;
}
