import { CommentOrderByWithAggregationInput } from "../../../inputs/CommentOrderByWithAggregationInput";
import { CommentScalarWhereWithAggregatesInput } from "../../../inputs/CommentScalarWhereWithAggregatesInput";
import { CommentWhereInput } from "../../../inputs/CommentWhereInput";
export declare class GroupByCommentArgs {
    where?: CommentWhereInput | undefined;
    orderBy?: CommentOrderByWithAggregationInput[] | undefined;
    by: Array<"text" | "userId" | "videoId" | "tx">;
    having?: CommentScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
