import { UserCreateNestedOneWithoutCommentsInput } from "../inputs/UserCreateNestedOneWithoutCommentsInput";
export declare class CommentCreateWithoutVideoInput {
    id?: string | undefined;
    text: string;
    tx: string;
    user: UserCreateNestedOneWithoutCommentsInput;
}
