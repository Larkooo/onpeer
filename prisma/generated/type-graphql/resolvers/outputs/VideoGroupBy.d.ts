import { Prisma } from "@prisma/client";
import { VideoCountAggregate } from "../outputs/VideoCountAggregate";
import { VideoMaxAggregate } from "../outputs/VideoMaxAggregate";
import { VideoMinAggregate } from "../outputs/VideoMinAggregate";
export declare class VideoGroupBy {
    id: string;
    tokenId: string | null;
    title: string;
    description: string;
    authorId: string;
    mintTx: string | null;
    mintSignature: Prisma.JsonValue | null;
    playbackId: string;
    createdAt: Date;
    _count: VideoCountAggregate | null;
    _min: VideoMinAggregate | null;
    _max: VideoMaxAggregate | null;
}
