import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutLikesNestedInput } from "../inputs/UserUpdateOneRequiredWithoutLikesNestedInput";
import { VideoUpdateOneRequiredWithoutLikesNestedInput } from "../inputs/VideoUpdateOneRequiredWithoutLikesNestedInput";
export declare class LikeUpdateInput {
    tx?: StringFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutLikesNestedInput | undefined;
    video?: VideoUpdateOneRequiredWithoutLikesNestedInput | undefined;
}
