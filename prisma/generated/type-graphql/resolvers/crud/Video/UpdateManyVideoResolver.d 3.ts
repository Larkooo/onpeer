import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyVideoArgs } from "./args/UpdateManyVideoArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyVideoResolver {
    updateManyVideo(ctx: any, info: GraphQLResolveInfo, args: UpdateManyVideoArgs): Promise<AffectedRowsOutput>;
}
