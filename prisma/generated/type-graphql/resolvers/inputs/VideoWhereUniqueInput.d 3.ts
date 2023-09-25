import { BigIntNullableFilter } from "../inputs/BigIntNullableFilter";
import { CommentListRelationFilter } from "../inputs/CommentListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { LikeListRelationFilter } from "../inputs/LikeListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
import { VideoWhereInput } from "../inputs/VideoWhereInput";
export declare class VideoWhereUniqueInput {
    id?: string | undefined;
    AND?: VideoWhereInput[] | undefined;
    OR?: VideoWhereInput[] | undefined;
    NOT?: VideoWhereInput[] | undefined;
    tokenId?: BigIntNullableFilter | undefined;
    title?: StringFilter | undefined;
    description?: StringFilter | undefined;
    authorId?: StringFilter | undefined;
    mintTx?: StringNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    author?: UserRelationFilter | undefined;
    comments?: CommentListRelationFilter | undefined;
    likes?: LikeListRelationFilter | undefined;
}
