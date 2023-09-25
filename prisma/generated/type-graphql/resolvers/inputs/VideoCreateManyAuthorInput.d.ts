import { Prisma } from "@prisma/client";
export declare class VideoCreateManyAuthorInput {
    id: string;
    tokenId?: string | undefined;
    title: string;
    description: string;
    mintTx?: string | undefined;
    mintSignature?: Prisma.InputJsonValue | undefined;
    playbackId: string;
    createdAt?: Date | undefined;
}
