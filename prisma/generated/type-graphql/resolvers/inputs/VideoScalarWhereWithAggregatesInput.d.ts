import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { JsonNullableWithAggregatesFilter } from "../inputs/JsonNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class VideoScalarWhereWithAggregatesInput {
    AND?: VideoScalarWhereWithAggregatesInput[] | undefined;
    OR?: VideoScalarWhereWithAggregatesInput[] | undefined;
    NOT?: VideoScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    tokenId?: StringNullableWithAggregatesFilter | undefined;
    title?: StringWithAggregatesFilter | undefined;
    description?: StringWithAggregatesFilter | undefined;
    authorId?: StringWithAggregatesFilter | undefined;
    mintTx?: StringNullableWithAggregatesFilter | undefined;
    mintSignature?: JsonNullableWithAggregatesFilter | undefined;
    playbackId?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
}
