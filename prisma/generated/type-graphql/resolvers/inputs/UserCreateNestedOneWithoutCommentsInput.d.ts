import { UserCreateOrConnectWithoutCommentsInput } from "../inputs/UserCreateOrConnectWithoutCommentsInput";
import { UserCreateWithoutCommentsInput } from "../inputs/UserCreateWithoutCommentsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutCommentsInput {
    create?: UserCreateWithoutCommentsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
