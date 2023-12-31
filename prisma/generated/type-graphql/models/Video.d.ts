import { Prisma } from "@prisma/client";
import { Comment } from "../models/Comment";
import { Like } from "../models/Like";
import { User } from "../models/User";
import { VideoCount } from "../resolvers/outputs/VideoCount";
export declare class Video {
    id: string;
    tokenId?: string | null;
    title: string;
    description: string;
    author?: User;
    authorId: string;
    comments?: Comment[];
    likes?: Like[];
    mintTx?: string | null;
    mintSignature?: Prisma.JsonValue | null;
    playbackId: string;
    createdAt: Date;
    _count?: VideoCount | null;
}
