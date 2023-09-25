import { SyncOrderByWithAggregationInput } from "../../../inputs/SyncOrderByWithAggregationInput";
import { SyncScalarWhereWithAggregatesInput } from "../../../inputs/SyncScalarWhereWithAggregatesInput";
import { SyncWhereInput } from "../../../inputs/SyncWhereInput";
export declare class GroupBySyncArgs {
    where?: SyncWhereInput | undefined;
    orderBy?: SyncOrderByWithAggregationInput[] | undefined;
    by: Array<"chainId" | "latestBlockNumber">;
    having?: SyncScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
