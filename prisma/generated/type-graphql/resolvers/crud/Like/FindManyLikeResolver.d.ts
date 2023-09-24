import type { GraphQLResolveInfo } from "graphql";
import { FindManyLikeArgs } from "./args/FindManyLikeArgs";
import { Like } from "../../../models/Like";
export declare class FindManyLikeResolver {
    likes(ctx: any, info: GraphQLResolveInfo, args: FindManyLikeArgs): Promise<Like[]>;
}
