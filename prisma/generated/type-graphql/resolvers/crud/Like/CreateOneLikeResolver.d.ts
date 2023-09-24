import type { GraphQLResolveInfo } from "graphql";
import { CreateOneLikeArgs } from "./args/CreateOneLikeArgs";
import { Like } from "../../../models/Like";
export declare class CreateOneLikeResolver {
    createOneLike(ctx: any, info: GraphQLResolveInfo, args: CreateOneLikeArgs): Promise<Like>;
}
