import { UserCreateOrConnectWithoutVideosInput } from "../inputs/UserCreateOrConnectWithoutVideosInput";
import { UserCreateWithoutVideosInput } from "../inputs/UserCreateWithoutVideosInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutVideosInput {
    create?: UserCreateWithoutVideosInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutVideosInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
