import { UserCreateOrConnectWithoutLikesInput } from "../inputs/UserCreateOrConnectWithoutLikesInput";
import { UserCreateWithoutLikesInput } from "../inputs/UserCreateWithoutLikesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutLikesInput {
    create?: UserCreateWithoutLikesInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
