import { CommentCreateNestedManyWithoutVideoInput } from "../inputs/CommentCreateNestedManyWithoutVideoInput";
import { LikeCreateNestedManyWithoutVideoInput } from "../inputs/LikeCreateNestedManyWithoutVideoInput";
export declare class VideoCreateWithoutAuthorInput {
    id: string;
    tokenId?: bigint | undefined;
    title: string;
    description: string;
    mintTx?: string | undefined;
    createdAt?: Date | undefined;
    comments?: CommentCreateNestedManyWithoutVideoInput | undefined;
    likes?: LikeCreateNestedManyWithoutVideoInput | undefined;
}
