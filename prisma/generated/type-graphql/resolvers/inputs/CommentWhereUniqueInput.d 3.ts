import { CommentUserIdVideoIdCompoundUniqueInput } from "../inputs/CommentUserIdVideoIdCompoundUniqueInput";
import { CommentWhereInput } from "../inputs/CommentWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
import { VideoRelationFilter } from "../inputs/VideoRelationFilter";
export declare class CommentWhereUniqueInput {
    userId_videoId?: CommentUserIdVideoIdCompoundUniqueInput | undefined;
    AND?: CommentWhereInput[] | undefined;
    OR?: CommentWhereInput[] | undefined;
    NOT?: CommentWhereInput[] | undefined;
    text?: StringFilter | undefined;
    userId?: StringFilter | undefined;
    videoId?: StringFilter | undefined;
    tx?: StringFilter | undefined;
    user?: UserRelationFilter | undefined;
    video?: VideoRelationFilter | undefined;
}
