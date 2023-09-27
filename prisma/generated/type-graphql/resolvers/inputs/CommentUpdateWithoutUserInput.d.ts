import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { VideoUpdateOneRequiredWithoutCommentsNestedInput } from "../inputs/VideoUpdateOneRequiredWithoutCommentsNestedInput";
export declare class CommentUpdateWithoutUserInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    text?: StringFieldUpdateOperationsInput | undefined;
    tx?: StringFieldUpdateOperationsInput | undefined;
    video?: VideoUpdateOneRequiredWithoutCommentsNestedInput | undefined;
}
