import { VideoCreateOrConnectWithoutLikesInput } from "../inputs/VideoCreateOrConnectWithoutLikesInput";
import { VideoCreateWithoutLikesInput } from "../inputs/VideoCreateWithoutLikesInput";
import { VideoWhereUniqueInput } from "../inputs/VideoWhereUniqueInput";
export declare class VideoCreateNestedOneWithoutLikesInput {
    create?: VideoCreateWithoutLikesInput | undefined;
    connectOrCreate?: VideoCreateOrConnectWithoutLikesInput | undefined;
    connect?: VideoWhereUniqueInput | undefined;
}
