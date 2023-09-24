import { UserCreateNestedOneWithoutCommentsInput } from "../inputs/UserCreateNestedOneWithoutCommentsInput";
export declare class CommentCreateWithoutVideoInput {
    text: string;
    tx: string;
    user: UserCreateNestedOneWithoutCommentsInput;
}
