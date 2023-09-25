import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { LikeUpdateManyWithoutVideoNestedInput } from "../inputs/LikeUpdateManyWithoutVideoNestedInput";
import { NullableBigIntFieldUpdateOperationsInput } from "../inputs/NullableBigIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutVideosNestedInput } from "../inputs/UserUpdateOneRequiredWithoutVideosNestedInput";
export declare class VideoUpdateWithoutCommentsInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    tokenId?: NullableBigIntFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    mintTx?: NullableStringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    author?: UserUpdateOneRequiredWithoutVideosNestedInput | undefined;
    likes?: LikeUpdateManyWithoutVideoNestedInput | undefined;
}
