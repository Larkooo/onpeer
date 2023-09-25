import type { GraphQLResolveInfo } from "graphql";
import { CreateManySyncArgs } from "./args/CreateManySyncArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManySyncResolver {
    createManySync(ctx: any, info: GraphQLResolveInfo, args: CreateManySyncArgs): Promise<AffectedRowsOutput>;
}
