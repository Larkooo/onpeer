import { CommentOrderByRelationAggregateInput } from "../inputs/CommentOrderByRelationAggregateInput";
import { LikeOrderByRelationAggregateInput } from "../inputs/LikeOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class VideoOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    tokenId?: SortOrderInput | undefined;
    title?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    authorId?: "asc" | "desc" | undefined;
    mintTx?: SortOrderInput | undefined;
    mintSignature?: SortOrderInput | undefined;
    playbackId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    author?: UserOrderByWithRelationInput | undefined;
    comments?: CommentOrderByRelationAggregateInput | undefined;
    likes?: LikeOrderByRelationAggregateInput | undefined;
}
