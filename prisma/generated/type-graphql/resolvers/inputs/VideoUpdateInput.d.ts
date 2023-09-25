import { CommentUpdateManyWithoutVideoNestedInput } from "../inputs/CommentUpdateManyWithoutVideoNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { LikeUpdateManyWithoutVideoNestedInput } from "../inputs/LikeUpdateManyWithoutVideoNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutVideosNestedInput } from "../inputs/UserUpdateOneRequiredWithoutVideosNestedInput";
export declare class VideoUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    tokenId?: NullableStringFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    mintTx?: NullableStringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    author?: UserUpdateOneRequiredWithoutVideosNestedInput | undefined;
    comments?: CommentUpdateManyWithoutVideoNestedInput | undefined;
    likes?: LikeUpdateManyWithoutVideoNestedInput | undefined;
}
