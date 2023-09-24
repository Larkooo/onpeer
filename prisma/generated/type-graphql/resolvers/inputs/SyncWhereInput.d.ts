import { IntFilter } from "../inputs/IntFilter";
export declare class SyncWhereInput {
    AND?: SyncWhereInput[] | undefined;
    OR?: SyncWhereInput[] | undefined;
    NOT?: SyncWhereInput[] | undefined;
    chainId?: IntFilter | undefined;
    latestBlockNumber?: IntFilter | undefined;
}
