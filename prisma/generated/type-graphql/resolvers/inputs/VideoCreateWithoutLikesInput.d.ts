import { Prisma } from "@prisma/client";
import { CommentCreateNestedManyWithoutVideoInput } from "../inputs/CommentCreateNestedManyWithoutVideoInput";
import { UserCreateNestedOneWithoutVideosInput } from "../inputs/UserCreateNestedOneWithoutVideosInput";
export declare class VideoCreateWithoutLikesInput {
    id: string;
    tokenId?: string | undefined;
    title: string;
    description: string;
    mintTx?: string | undefined;
    mintSignature?: Prisma.InputJsonValue | undefined;
    playbackId: string;
    createdAt?: Date | undefined;
    author: UserCreateNestedOneWithoutVideosInput;
    comments?: CommentCreateNestedManyWithoutVideoInput | undefined;
}
