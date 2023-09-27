import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutCommentsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutCommentsNestedInput";
export declare class CommentUpdateWithoutVideoInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    text?: StringFieldUpdateOperationsInput | undefined;
    tx?: StringFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput | undefined;
}
