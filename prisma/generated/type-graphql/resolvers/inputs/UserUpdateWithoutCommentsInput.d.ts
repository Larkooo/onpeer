import { LikeUpdateManyWithoutUserNestedInput } from "../inputs/LikeUpdateManyWithoutUserNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { VideoUpdateManyWithoutAuthorNestedInput } from "../inputs/VideoUpdateManyWithoutAuthorNestedInput";
export declare class UserUpdateWithoutCommentsInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    videos?: VideoUpdateManyWithoutAuthorNestedInput | undefined;
    likes?: LikeUpdateManyWithoutUserNestedInput | undefined;
}
