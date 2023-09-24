import { VideoCreateWithoutLikesInput } from "../inputs/VideoCreateWithoutLikesInput";
import { VideoUpdateWithoutLikesInput } from "../inputs/VideoUpdateWithoutLikesInput";
import { VideoWhereInput } from "../inputs/VideoWhereInput";
export declare class VideoUpsertWithoutLikesInput {
    update: VideoUpdateWithoutLikesInput;
    create: VideoCreateWithoutLikesInput;
    where?: VideoWhereInput | undefined;
}
