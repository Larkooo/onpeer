import { LikeCountAggregate } from "../outputs/LikeCountAggregate";
import { LikeMaxAggregate } from "../outputs/LikeMaxAggregate";
import { LikeMinAggregate } from "../outputs/LikeMinAggregate";
export declare class AggregateLike {
    _count: LikeCountAggregate | null;
    _min: LikeMinAggregate | null;
    _max: LikeMaxAggregate | null;
}
