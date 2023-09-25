import { Prisma } from "@prisma/client";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class VideoUpdateManyMutationInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    tokenId?: NullableStringFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    mintTx?: NullableStringFieldUpdateOperationsInput | undefined;
    mintSignature?: Prisma.InputJsonValue | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
