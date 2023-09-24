import { VideoCountCommentsArgs } from "./args/VideoCountCommentsArgs";
import { VideoCountLikesArgs } from "./args/VideoCountLikesArgs";
export declare class VideoCount {
    comments: number;
    likes: number;
    getComments(root: VideoCount, args: VideoCountCommentsArgs): number;
    getLikes(root: VideoCount, args: VideoCountLikesArgs): number;
}
