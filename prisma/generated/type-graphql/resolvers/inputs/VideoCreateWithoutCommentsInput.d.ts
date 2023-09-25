import { Prisma } from "@prisma/client";
import { LikeCreateNestedManyWithoutVideoInput } from "../inputs/LikeCreateNestedManyWithoutVideoInput";
import { UserCreateNestedOneWithoutVideosInput } from "../inputs/UserCreateNestedOneWithoutVideosInput";
export declare class VideoCreateWithoutCommentsInput {
    id: string;
    tokenId?: string | undefined;
    title: string;
    description: string;
    mintTx?: string | undefined;
    mintSignature?: Prisma.InputJsonValue | undefined;
    createdAt?: Date | undefined;
    author: UserCreateNestedOneWithoutVideosInput;
    likes?: LikeCreateNestedManyWithoutVideoInput | undefined;
}
