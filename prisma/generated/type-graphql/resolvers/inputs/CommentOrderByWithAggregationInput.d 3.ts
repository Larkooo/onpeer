import { CommentCountOrderByAggregateInput } from "../inputs/CommentCountOrderByAggregateInput";
import { CommentMaxOrderByAggregateInput } from "../inputs/CommentMaxOrderByAggregateInput";
import { CommentMinOrderByAggregateInput } from "../inputs/CommentMinOrderByAggregateInput";
export declare class CommentOrderByWithAggregationInput {
    text?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    videoId?: "asc" | "desc" | undefined;
    tx?: "asc" | "desc" | undefined;
    _count?: CommentCountOrderByAggregateInput | undefined;
    _max?: CommentMaxOrderByAggregateInput | undefined;
    _min?: CommentMinOrderByAggregateInput | undefined;
}
