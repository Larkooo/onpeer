import { VideoCreateOrConnectWithoutCommentsInput } from "../inputs/VideoCreateOrConnectWithoutCommentsInput";
import { VideoCreateWithoutCommentsInput } from "../inputs/VideoCreateWithoutCommentsInput";
import { VideoUpdateToOneWithWhereWithoutCommentsInput } from "../inputs/VideoUpdateToOneWithWhereWithoutCommentsInput";
import { VideoUpsertWithoutCommentsInput } from "../inputs/VideoUpsertWithoutCommentsInput";
import { VideoWhereUniqueInput } from "../inputs/VideoWhereUniqueInput";
export declare class VideoUpdateOneRequiredWithoutCommentsNestedInput {
    create?: VideoCreateWithoutCommentsInput | undefined;
    connectOrCreate?: VideoCreateOrConnectWithoutCommentsInput | undefined;
    upsert?: VideoUpsertWithoutCommentsInput | undefined;
    connect?: VideoWhereUniqueInput | undefined;
    update?: VideoUpdateToOneWithWhereWithoutCommentsInput | undefined;
}
