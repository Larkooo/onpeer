import { StringFilter } from "../inputs/StringFilter";
export declare class LikeScalarWhereInput {
    AND?: LikeScalarWhereInput[] | undefined;
    OR?: LikeScalarWhereInput[] | undefined;
    NOT?: LikeScalarWhereInput[] | undefined;
    userId?: StringFilter | undefined;
    videoId?: StringFilter | undefined;
    tx?: StringFilter | undefined;
}
