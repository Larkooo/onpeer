import { VideoCreateWithoutCommentsInput } from "../inputs/VideoCreateWithoutCommentsInput";
import { VideoUpdateWithoutCommentsInput } from "../inputs/VideoUpdateWithoutCommentsInput";
import { VideoWhereInput } from "../inputs/VideoWhereInput";
export declare class VideoUpsertWithoutCommentsInput {
    update: VideoUpdateWithoutCommentsInput;
    create: VideoCreateWithoutCommentsInput;
    where?: VideoWhereInput | undefined;
}
