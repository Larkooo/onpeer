import { Prisma } from "@prisma/client";
export declare class VideoCreateManyInput {
    id: string;
    tokenId?: string | undefined;
    title: string;
    description: string;
    authorId: string;
    mintTx?: string | undefined;
    mintSignature?: Prisma.InputJsonValue | undefined;
    createdAt?: Date | undefined;
}
