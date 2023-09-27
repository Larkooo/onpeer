import { VideoCreateNestedOneWithoutCommentsInput } from "../inputs/VideoCreateNestedOneWithoutCommentsInput";
export declare class CommentCreateWithoutUserInput {
    id?: string | undefined;
    text: string;
    tx: string;
    video: VideoCreateNestedOneWithoutCommentsInput;
}
