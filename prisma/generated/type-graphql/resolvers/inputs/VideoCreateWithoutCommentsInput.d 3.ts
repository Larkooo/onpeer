import { LikeCreateNestedManyWithoutVideoInput } from "../inputs/LikeCreateNestedManyWithoutVideoInput";
import { UserCreateNestedOneWithoutVideosInput } from "../inputs/UserCreateNestedOneWithoutVideosInput";
export declare class VideoCreateWithoutCommentsInput {
    id: string;
    tokenId?: bigint | undefined;
    title: string;
    description: string;
    mintTx?: string | undefined;
    createdAt?: Date | undefined;
    author: UserCreateNestedOneWithoutVideosInput;
    likes?: LikeCreateNestedManyWithoutVideoInput | undefined;
}
