import { LikeCreateManyVideoInputEnvelope } from "../inputs/LikeCreateManyVideoInputEnvelope";
import { LikeCreateOrConnectWithoutVideoInput } from "../inputs/LikeCreateOrConnectWithoutVideoInput";
import { LikeCreateWithoutVideoInput } from "../inputs/LikeCreateWithoutVideoInput";
import { LikeWhereUniqueInput } from "../inputs/LikeWhereUniqueInput";
export declare class LikeCreateNestedManyWithoutVideoInput {
    create?: LikeCreateWithoutVideoInput[] | undefined;
    connectOrCreate?: LikeCreateOrConnectWithoutVideoInput[] | undefined;
    createMany?: LikeCreateManyVideoInputEnvelope | undefined;
    connect?: LikeWhereUniqueInput[] | undefined;
}
