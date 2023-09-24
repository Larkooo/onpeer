import { VideoCountAggregate } from "../outputs/VideoCountAggregate";
import { VideoMaxAggregate } from "../outputs/VideoMaxAggregate";
import { VideoMinAggregate } from "../outputs/VideoMinAggregate";
export declare class AggregateVideo {
    _count: VideoCountAggregate | null;
    _min: VideoMinAggregate | null;
    _max: VideoMaxAggregate | null;
}
