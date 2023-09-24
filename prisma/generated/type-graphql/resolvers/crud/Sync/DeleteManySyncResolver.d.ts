import type { GraphQLResolveInfo } from "graphql";
import { DeleteManySyncArgs } from "./args/DeleteManySyncArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManySyncResolver {
    deleteManySync(ctx: any, info: GraphQLResolveInfo, args: DeleteManySyncArgs): Promise<AffectedRowsOutput>;
}
