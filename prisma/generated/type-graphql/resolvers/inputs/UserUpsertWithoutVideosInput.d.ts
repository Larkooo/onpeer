import { UserCreateWithoutVideosInput } from "../inputs/UserCreateWithoutVideosInput";
import { UserUpdateWithoutVideosInput } from "../inputs/UserUpdateWithoutVideosInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
export declare class UserUpsertWithoutVideosInput {
    update: UserUpdateWithoutVideosInput;
    create: UserCreateWithoutVideosInput;
    where?: UserWhereInput | undefined;
}
