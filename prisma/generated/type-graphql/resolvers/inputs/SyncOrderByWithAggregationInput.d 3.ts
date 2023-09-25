import { SyncAvgOrderByAggregateInput } from "../inputs/SyncAvgOrderByAggregateInput";
import { SyncCountOrderByAggregateInput } from "../inputs/SyncCountOrderByAggregateInput";
import { SyncMaxOrderByAggregateInput } from "../inputs/SyncMaxOrderByAggregateInput";
import { SyncMinOrderByAggregateInput } from "../inputs/SyncMinOrderByAggregateInput";
import { SyncSumOrderByAggregateInput } from "../inputs/SyncSumOrderByAggregateInput";
export declare class SyncOrderByWithAggregationInput {
    chainId?: "asc" | "desc" | undefined;
    latestBlockNumber?: "asc" | "desc" | undefined;
    _count?: SyncCountOrderByAggregateInput | undefined;
    _avg?: SyncAvgOrderByAggregateInput | undefined;
    _max?: SyncMaxOrderByAggregateInput | undefined;
    _min?: SyncMinOrderByAggregateInput | undefined;
    _sum?: SyncSumOrderByAggregateInput | undefined;
}
