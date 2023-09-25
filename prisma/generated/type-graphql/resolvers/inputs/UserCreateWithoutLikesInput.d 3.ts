import { CommentCreateNestedManyWithoutUserInput } from "../inputs/CommentCreateNestedManyWithoutUserInput";
import { VideoCreateNestedManyWithoutAuthorInput } from "../inputs/VideoCreateNestedManyWithoutAuthorInput";
export declare class UserCreateWithoutLikesInput {
    id: string;
    videos?: VideoCreateNestedManyWithoutAuthorInput | undefined;
    comments?: CommentCreateNestedManyWithoutUserInput | undefined;
}
