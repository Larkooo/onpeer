import type { GraphQLResolveInfo } from "graphql";
import { CreateManyCommentArgs } from "./args/CreateManyCommentArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyCommentResolver {
    createManyComment(ctx: any, info: GraphQLResolveInfo, args: CreateManyCommentArgs): Promise<AffectedRowsOutput>;
}
