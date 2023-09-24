import { CommentListRelationFilter } from "../inputs/CommentListRelationFilter";
import { LikeListRelationFilter } from "../inputs/LikeListRelationFilter";
import { UserWhereInput } from "../inputs/UserWhereInput";
import { VideoListRelationFilter } from "../inputs/VideoListRelationFilter";
export declare class UserWhereUniqueInput {
    id?: string | undefined;
    AND?: UserWhereInput[] | undefined;
    OR?: UserWhereInput[] | undefined;
    NOT?: UserWhereInput[] | undefined;
    videos?: VideoListRelationFilter | undefined;
    comments?: CommentListRelationFilter | undefined;
    likes?: LikeListRelationFilter | undefined;
}
