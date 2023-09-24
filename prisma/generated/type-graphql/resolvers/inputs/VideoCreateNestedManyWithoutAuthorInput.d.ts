import { VideoCreateManyAuthorInputEnvelope } from "../inputs/VideoCreateManyAuthorInputEnvelope";
import { VideoCreateOrConnectWithoutAuthorInput } from "../inputs/VideoCreateOrConnectWithoutAuthorInput";
import { VideoCreateWithoutAuthorInput } from "../inputs/VideoCreateWithoutAuthorInput";
import { VideoWhereUniqueInput } from "../inputs/VideoWhereUniqueInput";
export declare class VideoCreateNestedManyWithoutAuthorInput {
    create?: VideoCreateWithoutAuthorInput[] | undefined;
    connectOrCreate?: VideoCreateOrConnectWithoutAuthorInput[] | undefined;
    createMany?: VideoCreateManyAuthorInputEnvelope | undefined;
    connect?: VideoWhereUniqueInput[] | undefined;
}
