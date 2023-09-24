import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueLikeArgs } from "./args/FindUniqueLikeArgs";
import { Like } from "../../../models/Like";
export declare class FindUniqueLikeResolver {
    like(ctx: any, info: GraphQLResolveInfo, args: FindUniqueLikeArgs): Promise<Like | null>;
}
