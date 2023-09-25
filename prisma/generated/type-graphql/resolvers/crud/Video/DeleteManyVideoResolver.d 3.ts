import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyVideoArgs } from "./args/DeleteManyVideoArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyVideoResolver {
    deleteManyVideo(ctx: any, info: GraphQLResolveInfo, args: DeleteManyVideoArgs): Promise<AffectedRowsOutput>;
}
