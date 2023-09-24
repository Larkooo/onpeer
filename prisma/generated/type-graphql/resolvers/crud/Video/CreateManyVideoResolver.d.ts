import type { GraphQLResolveInfo } from "graphql";
import { CreateManyVideoArgs } from "./args/CreateManyVideoArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyVideoResolver {
    createManyVideo(ctx: any, info: GraphQLResolveInfo, args: CreateManyVideoArgs): Promise<AffectedRowsOutput>;
}
