import { VideoCreateOrConnectWithoutLikesInput } from "../inputs/VideoCreateOrConnectWithoutLikesInput";
import { VideoCreateWithoutLikesInput } from "../inputs/VideoCreateWithoutLikesInput";
import { VideoUpdateToOneWithWhereWithoutLikesInput } from "../inputs/VideoUpdateToOneWithWhereWithoutLikesInput";
import { VideoUpsertWithoutLikesInput } from "../inputs/VideoUpsertWithoutLikesInput";
import { VideoWhereUniqueInput } from "../inputs/VideoWhereUniqueInput";
export declare class VideoUpdateOneRequiredWithoutLikesNestedInput {
    create?: VideoCreateWithoutLikesInput | undefined;
    connectOrCreate?: VideoCreateOrConnectWithoutLikesInput | undefined;
    upsert?: VideoUpsertWithoutLikesInput | undefined;
    connect?: VideoWhereUniqueInput | undefined;
    update?: VideoUpdateToOneWithWhereWithoutLikesInput | undefined;
}
