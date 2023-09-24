import { VideoCreateNestedOneWithoutCommentsInput } from "../inputs/VideoCreateNestedOneWithoutCommentsInput";
export declare class CommentCreateWithoutUserInput {
    text: string;
    tx: string;
    video: VideoCreateNestedOneWithoutCommentsInput;
}
