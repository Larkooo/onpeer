import { SyncOrderByWithRelationInput } from "../../../inputs/SyncOrderByWithRelationInput";
import { SyncWhereInput } from "../../../inputs/SyncWhereInput";
import { SyncWhereUniqueInput } from "../../../inputs/SyncWhereUniqueInput";
export declare class FindFirstSyncArgs {
    where?: SyncWhereInput | undefined;
    orderBy?: SyncOrderByWithRelationInput[] | undefined;
    cursor?: SyncWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"chainId" | "latestBlockNumber"> | undefined;
}
