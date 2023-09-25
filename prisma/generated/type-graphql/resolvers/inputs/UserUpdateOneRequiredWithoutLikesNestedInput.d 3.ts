import { UserCreateOrConnectWithoutLikesInput } from "../inputs/UserCreateOrConnectWithoutLikesInput";
import { UserCreateWithoutLikesInput } from "../inputs/UserCreateWithoutLikesInput";
import { UserUpdateToOneWithWhereWithoutLikesInput } from "../inputs/UserUpdateToOneWithWhereWithoutLikesInput";
import { UserUpsertWithoutLikesInput } from "../inputs/UserUpsertWithoutLikesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutLikesNestedInput {
    create?: UserCreateWithoutLikesInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput | undefined;
    upsert?: UserUpsertWithoutLikesInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateToOneWithWhereWithoutLikesInput | undefined;
}
