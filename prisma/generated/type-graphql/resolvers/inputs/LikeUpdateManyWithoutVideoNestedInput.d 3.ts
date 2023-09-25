import { LikeCreateManyVideoInputEnvelope } from "../inputs/LikeCreateManyVideoInputEnvelope";
import { LikeCreateOrConnectWithoutVideoInput } from "../inputs/LikeCreateOrConnectWithoutVideoInput";
import { LikeCreateWithoutVideoInput } from "../inputs/LikeCreateWithoutVideoInput";
import { LikeScalarWhereInput } from "../inputs/LikeScalarWhereInput";
import { LikeUpdateManyWithWhereWithoutVideoInput } from "../inputs/LikeUpdateManyWithWhereWithoutVideoInput";
import { LikeUpdateWithWhereUniqueWithoutVideoInput } from "../inputs/LikeUpdateWithWhereUniqueWithoutVideoInput";
import { LikeUpsertWithWhereUniqueWithoutVideoInput } from "../inputs/LikeUpsertWithWhereUniqueWithoutVideoInput";
import { LikeWhereUniqueInput } from "../inputs/LikeWhereUniqueInput";
export declare class LikeUpdateManyWithoutVideoNestedInput {
    create?: LikeCreateWithoutVideoInput[] | undefined;
    connectOrCreate?: LikeCreateOrConnectWithoutVideoInput[] | undefined;
    upsert?: LikeUpsertWithWhereUniqueWithoutVideoInput[] | undefined;
    createMany?: LikeCreateManyVideoInputEnvelope | undefined;
    set?: LikeWhereUniqueInput[] | undefined;
    disconnect?: LikeWhereUniqueInput[] | undefined;
    delete?: LikeWhereUniqueInput[] | undefined;
    connect?: LikeWhereUniqueInput[] | undefined;
    update?: LikeUpdateWithWhereUniqueWithoutVideoInput[] | undefined;
    updateMany?: LikeUpdateManyWithWhereWithoutVideoInput[] | undefined;
    deleteMany?: LikeScalarWhereInput[] | undefined;
}
