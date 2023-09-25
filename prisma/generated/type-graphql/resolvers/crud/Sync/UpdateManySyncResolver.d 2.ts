import type { GraphQLResolveInfo } from "graphql";
import { UpdateManySyncArgs } from "./args/UpdateManySyncArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManySyncResolver {
    updateManySync(ctx: any, info: GraphQLResolveInfo, args: UpdateManySyncArgs): Promise<AffectedRowsOutput>;
}
