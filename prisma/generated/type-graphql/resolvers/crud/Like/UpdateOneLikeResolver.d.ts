import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneLikeArgs } from "./args/UpdateOneLikeArgs";
import { Like } from "../../../models/Like";
export declare class UpdateOneLikeResolver {
    updateOneLike(ctx: any, info: GraphQLResolveInfo, args: UpdateOneLikeArgs): Promise<Like | null>;
}
