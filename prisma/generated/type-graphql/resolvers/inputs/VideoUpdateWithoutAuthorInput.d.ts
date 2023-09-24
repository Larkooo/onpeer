import { CommentUpdateManyWithoutVideoNestedInput } from "../inputs/CommentUpdateManyWithoutVideoNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { LikeUpdateManyWithoutVideoNestedInput } from "../inputs/LikeUpdateManyWithoutVideoNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class VideoUpdateWithoutAuthorInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    mintTx?: NullableStringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    comments?: CommentUpdateManyWithoutVideoNestedInput | undefined;
    likes?: LikeUpdateManyWithoutVideoNestedInput | undefined;
}
