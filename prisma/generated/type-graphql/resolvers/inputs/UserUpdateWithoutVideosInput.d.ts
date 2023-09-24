import { CommentUpdateManyWithoutUserNestedInput } from "../inputs/CommentUpdateManyWithoutUserNestedInput";
import { LikeUpdateManyWithoutUserNestedInput } from "../inputs/LikeUpdateManyWithoutUserNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class UserUpdateWithoutVideosInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    comments?: CommentUpdateManyWithoutUserNestedInput | undefined;
    likes?: LikeUpdateManyWithoutUserNestedInput | undefined;
}
