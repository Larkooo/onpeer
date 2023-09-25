import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class LikeScalarWhereWithAggregatesInput {
    AND?: LikeScalarWhereWithAggregatesInput[] | undefined;
    OR?: LikeScalarWhereWithAggregatesInput[] | undefined;
    NOT?: LikeScalarWhereWithAggregatesInput[] | undefined;
    userId?: StringWithAggregatesFilter | undefined;
    videoId?: StringWithAggregatesFilter | undefined;
    tx?: StringWithAggregatesFilter | undefined;
}
