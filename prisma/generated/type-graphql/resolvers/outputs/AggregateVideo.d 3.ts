import { VideoAvgAggregate } from "../outputs/VideoAvgAggregate";
import { VideoCountAggregate } from "../outputs/VideoCountAggregate";
import { VideoMaxAggregate } from "../outputs/VideoMaxAggregate";
import { VideoMinAggregate } from "../outputs/VideoMinAggregate";
import { VideoSumAggregate } from "../outputs/VideoSumAggregate";
export declare class AggregateVideo {
    _count: VideoCountAggregate | null;
    _avg: VideoAvgAggregate | null;
    _sum: VideoSumAggregate | null;
    _min: VideoMinAggregate | null;
    _max: VideoMaxAggregate | null;
}
