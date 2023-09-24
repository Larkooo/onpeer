import { UserCreateNestedOneWithoutCommentsInput } from "../inputs/UserCreateNestedOneWithoutCommentsInput";
import { VideoCreateNestedOneWithoutCommentsInput } from "../inputs/VideoCreateNestedOneWithoutCommentsInput";
export declare class CommentCreateInput {
    text: string;
    tx: string;
    user: UserCreateNestedOneWithoutCommentsInput;
    video: VideoCreateNestedOneWithoutCommentsInput;
}
