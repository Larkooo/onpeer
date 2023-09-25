import { LikeCreateManyUserInputEnvelope } from "../inputs/LikeCreateManyUserInputEnvelope";
import { LikeCreateOrConnectWithoutUserInput } from "../inputs/LikeCreateOrConnectWithoutUserInput";
import { LikeCreateWithoutUserInput } from "../inputs/LikeCreateWithoutUserInput";
import { LikeScalarWhereInput } from "../inputs/LikeScalarWhereInput";
import { LikeUpdateManyWithWhereWithoutUserInput } from "../inputs/LikeUpdateManyWithWhereWithoutUserInput";
import { LikeUpdateWithWhereUniqueWithoutUserInput } from "../inputs/LikeUpdateWithWhereUniqueWithoutUserInput";
import { LikeUpsertWithWhereUniqueWithoutUserInput } from "../inputs/LikeUpsertWithWhereUniqueWithoutUserInput";
import { LikeWhereUniqueInput } from "../inputs/LikeWhereUniqueInput";
export declare class LikeUpdateManyWithoutUserNestedInput {
    create?: LikeCreateWithoutUserInput[] | undefined;
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput[] | undefined;
    upsert?: LikeUpsertWithWhereUniqueWithoutUserInput[] | undefined;
    createMany?: LikeCreateManyUserInputEnvelope | undefined;
    set?: LikeWhereUniqueInput[] | undefined;
    disconnect?: LikeWhereUniqueInput[] | undefined;
    delete?: LikeWhereUniqueInput[] | undefined;
    connect?: LikeWhereUniqueInput[] | undefined;
    update?: LikeUpdateWithWhereUniqueWithoutUserInput[] | undefined;
    updateMany?: LikeUpdateManyWithWhereWithoutUserInput[] | undefined;
    deleteMany?: LikeScalarWhereInput[] | undefined;
}
