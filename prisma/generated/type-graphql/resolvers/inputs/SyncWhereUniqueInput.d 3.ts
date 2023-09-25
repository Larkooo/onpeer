import { IntFilter } from "../inputs/IntFilter";
import { SyncWhereInput } from "../inputs/SyncWhereInput";
export declare class SyncWhereUniqueInput {
    chainId?: number | undefined;
    AND?: SyncWhereInput[] | undefined;
    OR?: SyncWhereInput[] | undefined;
    NOT?: SyncWhereInput[] | undefined;
    latestBlockNumber?: IntFilter | undefined;
}
