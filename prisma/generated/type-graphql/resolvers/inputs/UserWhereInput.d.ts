import { CommentListRelationFilter } from "../inputs/CommentListRelationFilter";
import { LikeListRelationFilter } from "../inputs/LikeListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { VideoListRelationFilter } from "../inputs/VideoListRelationFilter";
export declare class UserWhereInput {
    AND?: UserWhereInput[] | undefined;
    OR?: UserWhereInput[] | undefined;
    NOT?: UserWhereInput[] | undefined;
    id?: StringFilter | undefined;
    videos?: VideoListRelationFilter | undefined;
    comments?: CommentListRelationFilter | undefined;
    likes?: LikeListRelationFilter | undefined;
}
