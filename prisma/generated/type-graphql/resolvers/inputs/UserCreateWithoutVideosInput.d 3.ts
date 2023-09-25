import { CommentCreateNestedManyWithoutUserInput } from "../inputs/CommentCreateNestedManyWithoutUserInput";
import { LikeCreateNestedManyWithoutUserInput } from "../inputs/LikeCreateNestedManyWithoutUserInput";
export declare class UserCreateWithoutVideosInput {
    id: string;
    comments?: CommentCreateNestedManyWithoutUserInput | undefined;
    likes?: LikeCreateNestedManyWithoutUserInput | undefined;
}
