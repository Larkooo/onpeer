import { UserCreateWithoutLikesInput } from "../inputs/UserCreateWithoutLikesInput";
import { UserUpdateWithoutLikesInput } from "../inputs/UserUpdateWithoutLikesInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
export declare class UserUpsertWithoutLikesInput {
    update: UserUpdateWithoutLikesInput;
    create: UserCreateWithoutLikesInput;
    where?: UserWhereInput | undefined;
}
