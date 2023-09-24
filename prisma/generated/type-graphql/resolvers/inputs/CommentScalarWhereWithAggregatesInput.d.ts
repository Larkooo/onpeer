import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class CommentScalarWhereWithAggregatesInput {
    AND?: CommentScalarWhereWithAggregatesInput[] | undefined;
    OR?: CommentScalarWhereWithAggregatesInput[] | undefined;
    NOT?: CommentScalarWhereWithAggregatesInput[] | undefined;
    text?: StringWithAggregatesFilter | undefined;
    userId?: StringWithAggregatesFilter | undefined;
    videoId?: StringWithAggregatesFilter | undefined;
    tx?: StringWithAggregatesFilter | undefined;
}
