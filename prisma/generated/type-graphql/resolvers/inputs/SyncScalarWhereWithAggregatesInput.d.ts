import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
export declare class SyncScalarWhereWithAggregatesInput {
    AND?: SyncScalarWhereWithAggregatesInput[] | undefined;
    OR?: SyncScalarWhereWithAggregatesInput[] | undefined;
    NOT?: SyncScalarWhereWithAggregatesInput[] | undefined;
    chainId?: IntWithAggregatesFilter | undefined;
    latestBlockNumber?: IntWithAggregatesFilter | undefined;
}
