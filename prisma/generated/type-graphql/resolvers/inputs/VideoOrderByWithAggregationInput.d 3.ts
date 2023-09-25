import { SortOrderInput } from "../inputs/SortOrderInput";
import { VideoAvgOrderByAggregateInput } from "../inputs/VideoAvgOrderByAggregateInput";
import { VideoCountOrderByAggregateInput } from "../inputs/VideoCountOrderByAggregateInput";
import { VideoMaxOrderByAggregateInput } from "../inputs/VideoMaxOrderByAggregateInput";
import { VideoMinOrderByAggregateInput } from "../inputs/VideoMinOrderByAggregateInput";
import { VideoSumOrderByAggregateInput } from "../inputs/VideoSumOrderByAggregateInput";
export declare class VideoOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    tokenId?: SortOrderInput | undefined;
    title?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    authorId?: "asc" | "desc" | undefined;
    mintTx?: SortOrderInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    _count?: VideoCountOrderByAggregateInput | undefined;
    _avg?: VideoAvgOrderByAggregateInput | undefined;
    _max?: VideoMaxOrderByAggregateInput | undefined;
    _min?: VideoMinOrderByAggregateInput | undefined;
    _sum?: VideoSumOrderByAggregateInput | undefined;
}
