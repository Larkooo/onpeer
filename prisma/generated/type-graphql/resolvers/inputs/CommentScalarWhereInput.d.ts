import { StringFilter } from "../inputs/StringFilter";
export declare class CommentScalarWhereInput {
    AND?: CommentScalarWhereInput[] | undefined;
    OR?: CommentScalarWhereInput[] | undefined;
    NOT?: CommentScalarWhereInput[] | undefined;
    text?: StringFilter | undefined;
    userId?: StringFilter | undefined;
    videoId?: StringFilter | undefined;
    tx?: StringFilter | undefined;
}
