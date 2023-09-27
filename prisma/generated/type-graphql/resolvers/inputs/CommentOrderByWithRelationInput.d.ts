import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { VideoOrderByWithRelationInput } from "../inputs/VideoOrderByWithRelationInput";
export declare class CommentOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    text?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    videoId?: "asc" | "desc" | undefined;
    tx?: "asc" | "desc" | undefined;
    user?: UserOrderByWithRelationInput | undefined;
    video?: VideoOrderByWithRelationInput | undefined;
}
