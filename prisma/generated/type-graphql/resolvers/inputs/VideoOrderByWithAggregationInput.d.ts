import { SortOrderInput } from "../inputs/SortOrderInput";
import { VideoCountOrderByAggregateInput } from "../inputs/VideoCountOrderByAggregateInput";
import { VideoMaxOrderByAggregateInput } from "../inputs/VideoMaxOrderByAggregateInput";
import { VideoMinOrderByAggregateInput } from "../inputs/VideoMinOrderByAggregateInput";
export declare class VideoOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    tokenId?: SortOrderInput | undefined;
    title?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    authorId?: "asc" | "desc" | undefined;
    mintTx?: SortOrderInput | undefined;
    mintSignature?: SortOrderInput | undefined;
    playbackId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    _count?: VideoCountOrderByAggregateInput | undefined;
    _max?: VideoMaxOrderByAggregateInput | undefined;
    _min?: VideoMinOrderByAggregateInput | undefined;
}
