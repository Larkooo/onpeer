import { LikeCountOrderByAggregateInput } from "../inputs/LikeCountOrderByAggregateInput";
import { LikeMaxOrderByAggregateInput } from "../inputs/LikeMaxOrderByAggregateInput";
import { LikeMinOrderByAggregateInput } from "../inputs/LikeMinOrderByAggregateInput";
export declare class LikeOrderByWithAggregationInput {
    userId?: "asc" | "desc" | undefined;
    videoId?: "asc" | "desc" | undefined;
    tx?: "asc" | "desc" | undefined;
    _count?: LikeCountOrderByAggregateInput | undefined;
    _max?: LikeMaxOrderByAggregateInput | undefined;
    _min?: LikeMinOrderByAggregateInput | undefined;
}
