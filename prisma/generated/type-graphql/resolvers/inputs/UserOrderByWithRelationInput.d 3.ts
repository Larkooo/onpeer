import { CommentOrderByRelationAggregateInput } from "../inputs/CommentOrderByRelationAggregateInput";
import { LikeOrderByRelationAggregateInput } from "../inputs/LikeOrderByRelationAggregateInput";
import { VideoOrderByRelationAggregateInput } from "../inputs/VideoOrderByRelationAggregateInput";
export declare class UserOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    videos?: VideoOrderByRelationAggregateInput | undefined;
    comments?: CommentOrderByRelationAggregateInput | undefined;
    likes?: LikeOrderByRelationAggregateInput | undefined;
}
