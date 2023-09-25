import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutCommentsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutCommentsNestedInput";
export declare class CommentUpdateWithoutVideoInput {
    text?: StringFieldUpdateOperationsInput | undefined;
    tx?: StringFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput | undefined;
}
