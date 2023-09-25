import { CommentUpdateManyWithoutUserNestedInput } from "../inputs/CommentUpdateManyWithoutUserNestedInput";
import { LikeUpdateManyWithoutUserNestedInput } from "../inputs/LikeUpdateManyWithoutUserNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { VideoUpdateManyWithoutAuthorNestedInput } from "../inputs/VideoUpdateManyWithoutAuthorNestedInput";
export declare class UserUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    videos?: VideoUpdateManyWithoutAuthorNestedInput | undefined;
    comments?: CommentUpdateManyWithoutUserNestedInput | undefined;
    likes?: LikeUpdateManyWithoutUserNestedInput | undefined;
}
