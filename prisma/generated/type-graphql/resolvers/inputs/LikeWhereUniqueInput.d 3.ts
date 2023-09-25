import { LikeUserIdVideoIdCompoundUniqueInput } from "../inputs/LikeUserIdVideoIdCompoundUniqueInput";
import { LikeWhereInput } from "../inputs/LikeWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
import { VideoRelationFilter } from "../inputs/VideoRelationFilter";
export declare class LikeWhereUniqueInput {
    userId_videoId?: LikeUserIdVideoIdCompoundUniqueInput | undefined;
    AND?: LikeWhereInput[] | undefined;
    OR?: LikeWhereInput[] | undefined;
    NOT?: LikeWhereInput[] | undefined;
    userId?: StringFilter | undefined;
    videoId?: StringFilter | undefined;
    tx?: StringFilter | undefined;
    user?: UserRelationFilter | undefined;
    video?: VideoRelationFilter | undefined;
}
