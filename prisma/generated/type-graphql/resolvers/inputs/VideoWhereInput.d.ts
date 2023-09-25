import { CommentListRelationFilter } from "../inputs/CommentListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { JsonNullableFilter } from "../inputs/JsonNullableFilter";
import { LikeListRelationFilter } from "../inputs/LikeListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class VideoWhereInput {
    AND?: VideoWhereInput[] | undefined;
    OR?: VideoWhereInput[] | undefined;
    NOT?: VideoWhereInput[] | undefined;
    id?: StringFilter | undefined;
    tokenId?: StringNullableFilter | undefined;
    title?: StringFilter | undefined;
    description?: StringFilter | undefined;
    authorId?: StringFilter | undefined;
    mintTx?: StringNullableFilter | undefined;
    mintSignature?: JsonNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    author?: UserRelationFilter | undefined;
    comments?: CommentListRelationFilter | undefined;
    likes?: LikeListRelationFilter | undefined;
}
