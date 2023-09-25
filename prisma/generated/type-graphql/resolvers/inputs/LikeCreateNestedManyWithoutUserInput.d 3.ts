import { LikeCreateManyUserInputEnvelope } from "../inputs/LikeCreateManyUserInputEnvelope";
import { LikeCreateOrConnectWithoutUserInput } from "../inputs/LikeCreateOrConnectWithoutUserInput";
import { LikeCreateWithoutUserInput } from "../inputs/LikeCreateWithoutUserInput";
import { LikeWhereUniqueInput } from "../inputs/LikeWhereUniqueInput";
export declare class LikeCreateNestedManyWithoutUserInput {
    create?: LikeCreateWithoutUserInput[] | undefined;
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput[] | undefined;
    createMany?: LikeCreateManyUserInputEnvelope | undefined;
    connect?: LikeWhereUniqueInput[] | undefined;
}
