import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { VideoOrderByWithRelationInput } from "../inputs/VideoOrderByWithRelationInput";
export declare class LikeOrderByWithRelationInput {
    userId?: "asc" | "desc" | undefined;
    videoId?: "asc" | "desc" | undefined;
    tx?: "asc" | "desc" | undefined;
    user?: UserOrderByWithRelationInput | undefined;
    video?: VideoOrderByWithRelationInput | undefined;
}
