import { CommentCreateNestedManyWithoutVideoInput } from "../inputs/CommentCreateNestedManyWithoutVideoInput";
import { UserCreateNestedOneWithoutVideosInput } from "../inputs/UserCreateNestedOneWithoutVideosInput";
export declare class VideoCreateWithoutLikesInput {
    id: string;
    title: string;
    description: string;
    mintTx?: string | undefined;
    createdAt?: Date | undefined;
    author: UserCreateNestedOneWithoutVideosInput;
    comments?: CommentCreateNestedManyWithoutVideoInput | undefined;
}
