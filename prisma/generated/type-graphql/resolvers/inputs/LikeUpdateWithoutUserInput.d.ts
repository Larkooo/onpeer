import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { VideoUpdateOneRequiredWithoutLikesNestedInput } from "../inputs/VideoUpdateOneRequiredWithoutLikesNestedInput";
export declare class LikeUpdateWithoutUserInput {
    tx?: StringFieldUpdateOperationsInput | undefined;
    video?: VideoUpdateOneRequiredWithoutLikesNestedInput | undefined;
}
