import { CommentUpdateManyWithoutUserNestedInput } from "../inputs/CommentUpdateManyWithoutUserNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { VideoUpdateManyWithoutAuthorNestedInput } from "../inputs/VideoUpdateManyWithoutAuthorNestedInput";
export declare class UserUpdateWithoutLikesInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    videos?: VideoUpdateManyWithoutAuthorNestedInput | undefined;
    comments?: CommentUpdateManyWithoutUserNestedInput | undefined;
}
