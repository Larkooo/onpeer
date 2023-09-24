import { VideoCreateManyAuthorInputEnvelope } from "../inputs/VideoCreateManyAuthorInputEnvelope";
import { VideoCreateOrConnectWithoutAuthorInput } from "../inputs/VideoCreateOrConnectWithoutAuthorInput";
import { VideoCreateWithoutAuthorInput } from "../inputs/VideoCreateWithoutAuthorInput";
import { VideoScalarWhereInput } from "../inputs/VideoScalarWhereInput";
import { VideoUpdateManyWithWhereWithoutAuthorInput } from "../inputs/VideoUpdateManyWithWhereWithoutAuthorInput";
import { VideoUpdateWithWhereUniqueWithoutAuthorInput } from "../inputs/VideoUpdateWithWhereUniqueWithoutAuthorInput";
import { VideoUpsertWithWhereUniqueWithoutAuthorInput } from "../inputs/VideoUpsertWithWhereUniqueWithoutAuthorInput";
import { VideoWhereUniqueInput } from "../inputs/VideoWhereUniqueInput";
export declare class VideoUpdateManyWithoutAuthorNestedInput {
    create?: VideoCreateWithoutAuthorInput[] | undefined;
    connectOrCreate?: VideoCreateOrConnectWithoutAuthorInput[] | undefined;
    upsert?: VideoUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;
    createMany?: VideoCreateManyAuthorInputEnvelope | undefined;
    set?: VideoWhereUniqueInput[] | undefined;
    disconnect?: VideoWhereUniqueInput[] | undefined;
    delete?: VideoWhereUniqueInput[] | undefined;
    connect?: VideoWhereUniqueInput[] | undefined;
    update?: VideoUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;
    updateMany?: VideoUpdateManyWithWhereWithoutAuthorInput[] | undefined;
    deleteMany?: VideoScalarWhereInput[] | undefined;
}
