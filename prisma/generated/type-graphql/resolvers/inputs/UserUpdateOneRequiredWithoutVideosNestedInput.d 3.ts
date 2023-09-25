import { UserCreateOrConnectWithoutVideosInput } from "../inputs/UserCreateOrConnectWithoutVideosInput";
import { UserCreateWithoutVideosInput } from "../inputs/UserCreateWithoutVideosInput";
import { UserUpdateToOneWithWhereWithoutVideosInput } from "../inputs/UserUpdateToOneWithWhereWithoutVideosInput";
import { UserUpsertWithoutVideosInput } from "../inputs/UserUpsertWithoutVideosInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutVideosNestedInput {
    create?: UserCreateWithoutVideosInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutVideosInput | undefined;
    upsert?: UserUpsertWithoutVideosInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateToOneWithWhereWithoutVideosInput | undefined;
}
