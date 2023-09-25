import { Prisma } from "@prisma/client";
import { CommentCreateNestedManyWithoutVideoInput } from "../inputs/CommentCreateNestedManyWithoutVideoInput";
import { LikeCreateNestedManyWithoutVideoInput } from "../inputs/LikeCreateNestedManyWithoutVideoInput";
export declare class VideoCreateWithoutAuthorInput {
    id: string;
    tokenId?: string | undefined;
    title: string;
    description: string;
    mintTx?: string | undefined;
    mintSignature?: Prisma.InputJsonValue | undefined;
    playbackId: string;
    createdAt?: Date | undefined;
    comments?: CommentCreateNestedManyWithoutVideoInput | undefined;
    likes?: LikeCreateNestedManyWithoutVideoInput | undefined;
}
