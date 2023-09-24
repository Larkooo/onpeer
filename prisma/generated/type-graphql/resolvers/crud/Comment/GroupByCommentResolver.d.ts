import type { GraphQLResolveInfo } from "graphql";
import { GroupByCommentArgs } from "./args/GroupByCommentArgs";
import { CommentGroupBy } from "../../outputs/CommentGroupBy";
export declare class GroupByCommentResolver {
    groupByComment(ctx: any, info: GraphQLResolveInfo, args: GroupByCommentArgs): Promise<CommentGroupBy[]>;
}
