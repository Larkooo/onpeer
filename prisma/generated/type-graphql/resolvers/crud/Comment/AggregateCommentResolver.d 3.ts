import type { GraphQLResolveInfo } from "graphql";
import { AggregateCommentArgs } from "./args/AggregateCommentArgs";
import { AggregateComment } from "../../outputs/AggregateComment";
export declare class AggregateCommentResolver {
    aggregateComment(ctx: any, info: GraphQLResolveInfo, args: AggregateCommentArgs): Promise<AggregateComment>;
}
