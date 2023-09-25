import { Prisma } from "@prisma/client";
import { CommentCreateNestedManyWithoutVideoInput } from "../inputs/CommentCreateNestedManyWithoutVideoInput";
import { LikeCreateNestedManyWithoutVideoInput } from "../inputs/LikeCreateNestedManyWithoutVideoInput";
import { UserCreateNestedOneWithoutVideosInput } from "../inputs/UserCreateNestedOneWithoutVideosInput";
export declare class VideoCreateInput {
    id: string;
    tokenId?: string | undefined;
    title: string;
    description: string;
    mintTx?: string | undefined;
    mintSignature?: Prisma.InputJsonValue | undefined;
    createdAt?: Date | undefined;
    author: UserCreateNestedOneWithoutVideosInput;
    comments?: CommentCreateNestedManyWithoutVideoInput | undefined;
    likes?: LikeCreateNestedManyWithoutVideoInput | undefined;
}
