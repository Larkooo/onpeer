import { VideoCreateInput } from "../../../inputs/VideoCreateInput";
import { VideoUpdateInput } from "../../../inputs/VideoUpdateInput";
import { VideoWhereUniqueInput } from "../../../inputs/VideoWhereUniqueInput";
export declare class UpsertOneVideoArgs {
    where: VideoWhereUniqueInput;
    create: VideoCreateInput;
    update: VideoUpdateInput;
}
