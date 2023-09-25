import { VideoAvgAggregate } from "../outputs/VideoAvgAggregate";
import { VideoCountAggregate } from "../outputs/VideoCountAggregate";
import { VideoMaxAggregate } from "../outputs/VideoMaxAggregate";
import { VideoMinAggregate } from "../outputs/VideoMinAggregate";
import { VideoSumAggregate } from "../outputs/VideoSumAggregate";
export declare class VideoGroupBy {
    id: string;
    tokenId: bigint | null;
    title: string;
    description: string;
    authorId: string;
    mintTx: string | null;
    createdAt: Date;
    _count: VideoCountAggregate | null;
    _avg: VideoAvgAggregate | null;
    _sum: VideoSumAggregate | null;
    _min: VideoMinAggregate | null;
    _max: VideoMaxAggregate | null;
}
