import { CommentUpdateManyWithoutVideoNestedInput } from "../inputs/CommentUpdateManyWithoutVideoNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutVideosNestedInput } from "../inputs/UserUpdateOneRequiredWithoutVideosNestedInput";
export declare class VideoUpdateWithoutLikesInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    tokenId?: NullableStringFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    mintTx?: NullableStringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    author?: UserUpdateOneRequiredWithoutVideosNestedInput | undefined;
    comments?: CommentUpdateManyWithoutVideoNestedInput | undefined;
}
