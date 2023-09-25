import { CommentCreateNestedManyWithoutUserInput } from "../inputs/CommentCreateNestedManyWithoutUserInput";
import { LikeCreateNestedManyWithoutUserInput } from "../inputs/LikeCreateNestedManyWithoutUserInput";
import { VideoCreateNestedManyWithoutAuthorInput } from "../inputs/VideoCreateNestedManyWithoutAuthorInput";
export declare class UserCreateInput {
    id: string;
    videos?: VideoCreateNestedManyWithoutAuthorInput | undefined;
    comments?: CommentCreateNestedManyWithoutUserInput | undefined;
    likes?: LikeCreateNestedManyWithoutUserInput | undefined;
}
