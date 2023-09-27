import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutCommentsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutCommentsNestedInput";
import { VideoUpdateOneRequiredWithoutCommentsNestedInput } from "../inputs/VideoUpdateOneRequiredWithoutCommentsNestedInput";
export declare class CommentUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    text?: StringFieldUpdateOperationsInput | undefined;
    tx?: StringFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput | undefined;
    video?: VideoUpdateOneRequiredWithoutCommentsNestedInput | undefined;
}
