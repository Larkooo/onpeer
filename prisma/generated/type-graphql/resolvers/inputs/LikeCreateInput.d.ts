import { UserCreateNestedOneWithoutLikesInput } from "../inputs/UserCreateNestedOneWithoutLikesInput";
import { VideoCreateNestedOneWithoutLikesInput } from "../inputs/VideoCreateNestedOneWithoutLikesInput";
export declare class LikeCreateInput {
    tx: string;
    user: UserCreateNestedOneWithoutLikesInput;
    video: VideoCreateNestedOneWithoutLikesInput;
}
