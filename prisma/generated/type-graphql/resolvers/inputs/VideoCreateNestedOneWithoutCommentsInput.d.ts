import { VideoCreateOrConnectWithoutCommentsInput } from "../inputs/VideoCreateOrConnectWithoutCommentsInput";
import { VideoCreateWithoutCommentsInput } from "../inputs/VideoCreateWithoutCommentsInput";
import { VideoWhereUniqueInput } from "../inputs/VideoWhereUniqueInput";
export declare class VideoCreateNestedOneWithoutCommentsInput {
    create?: VideoCreateWithoutCommentsInput | undefined;
    connectOrCreate?: VideoCreateOrConnectWithoutCommentsInput | undefined;
    connect?: VideoWhereUniqueInput | undefined;
}
