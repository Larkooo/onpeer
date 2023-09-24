import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class VideoScalarWhereWithAggregatesInput {
    AND?: VideoScalarWhereWithAggregatesInput[] | undefined;
    OR?: VideoScalarWhereWithAggregatesInput[] | undefined;
    NOT?: VideoScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    title?: StringWithAggregatesFilter | undefined;
    description?: StringWithAggregatesFilter | undefined;
    authorId?: StringWithAggregatesFilter | undefined;
    mintTx?: StringNullableWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
}
