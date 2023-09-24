import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class VideoScalarWhereInput {
    AND?: VideoScalarWhereInput[] | undefined;
    OR?: VideoScalarWhereInput[] | undefined;
    NOT?: VideoScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    title?: StringFilter | undefined;
    description?: StringFilter | undefined;
    authorId?: StringFilter | undefined;
    mintTx?: StringNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
}
