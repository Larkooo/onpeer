import { CommentCreateNestedManyWithoutVideoInput } from "../inputs/CommentCreateNestedManyWithoutVideoInput";
import { LikeCreateNestedManyWithoutVideoInput } from "../inputs/LikeCreateNestedManyWithoutVideoInput";
import { UserCreateNestedOneWithoutVideosInput } from "../inputs/UserCreateNestedOneWithoutVideosInput";
export declare class VideoCreateInput {
    id: string;
    title: string;
    description: string;
    mintTx?: string | undefined;
    createdAt?: Date | undefined;
    author: UserCreateNestedOneWithoutVideosInput;
    comments?: CommentCreateNestedManyWithoutVideoInput | undefined;
    likes?: LikeCreateNestedManyWithoutVideoInput | undefined;
}
