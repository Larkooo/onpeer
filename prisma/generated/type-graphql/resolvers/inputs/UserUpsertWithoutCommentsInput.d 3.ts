import { UserCreateWithoutCommentsInput } from "../inputs/UserCreateWithoutCommentsInput";
import { UserUpdateWithoutCommentsInput } from "../inputs/UserUpdateWithoutCommentsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
export declare class UserUpsertWithoutCommentsInput {
    update: UserUpdateWithoutCommentsInput;
    create: UserCreateWithoutCommentsInput;
    where?: UserWhereInput | undefined;
}
