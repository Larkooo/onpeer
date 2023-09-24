import { LikeCreateNestedManyWithoutUserInput } from "../inputs/LikeCreateNestedManyWithoutUserInput";
import { VideoCreateNestedManyWithoutAuthorInput } from "../inputs/VideoCreateNestedManyWithoutAuthorInput";
export declare class UserCreateWithoutCommentsInput {
    id: string;
    videos?: VideoCreateNestedManyWithoutAuthorInput | undefined;
    likes?: LikeCreateNestedManyWithoutUserInput | undefined;
}
