import { SyncAvgAggregate } from "../outputs/SyncAvgAggregate";
import { SyncCountAggregate } from "../outputs/SyncCountAggregate";
import { SyncMaxAggregate } from "../outputs/SyncMaxAggregate";
import { SyncMinAggregate } from "../outputs/SyncMinAggregate";
import { SyncSumAggregate } from "../outputs/SyncSumAggregate";
export declare class SyncGroupBy {
    chainId: number;
    latestBlockNumber: number;
    _count: SyncCountAggregate | null;
    _avg: SyncAvgAggregate | null;
    _sum: SyncSumAggregate | null;
    _min: SyncMinAggregate | null;
    _max: SyncMaxAggregate | null;
}
