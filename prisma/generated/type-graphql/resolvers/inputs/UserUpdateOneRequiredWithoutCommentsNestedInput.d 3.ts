import { UserCreateOrConnectWithoutCommentsInput } from "../inputs/UserCreateOrConnectWithoutCommentsInput";
import { UserCreateWithoutCommentsInput } from "../inputs/UserCreateWithoutCommentsInput";
import { UserUpdateToOneWithWhereWithoutCommentsInput } from "../inputs/UserUpdateToOneWithWhereWithoutCommentsInput";
import { UserUpsertWithoutCommentsInput } from "../inputs/UserUpsertWithoutCommentsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutCommentsNestedInput {
    create?: UserCreateWithoutCommentsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput | undefined;
    upsert?: UserUpsertWithoutCommentsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateToOneWithWhereWithoutCommentsInput | undefined;
}
