import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneLikeArgs } from "./args/DeleteOneLikeArgs";
import { Like } from "../../../models/Like";
export declare class DeleteOneLikeResolver {
    deleteOneLike(ctx: any, info: GraphQLResolveInfo, args: DeleteOneLikeArgs): Promise<Like | null>;
}
