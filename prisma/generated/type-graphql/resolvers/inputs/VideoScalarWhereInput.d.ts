import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { JsonNullableFilter } from "../inputs/JsonNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class VideoScalarWhereInput {
    AND?: VideoScalarWhereInput[] | undefined;
    OR?: VideoScalarWhereInput[] | undefined;
    NOT?: VideoScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    tokenId?: StringNullableFilter | undefined;
    title?: StringFilter | undefined;
    description?: StringFilter | undefined;
    authorId?: StringFilter | undefined;
    mintTx?: StringNullableFilter | undefined;
    mintSignature?: JsonNullableFilter | undefined;
    playbackId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
}
