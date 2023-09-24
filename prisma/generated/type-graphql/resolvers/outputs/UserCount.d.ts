import { UserCountCommentsArgs } from "./args/UserCountCommentsArgs";
import { UserCountLikesArgs } from "./args/UserCountLikesArgs";
import { UserCountVideosArgs } from "./args/UserCountVideosArgs";
export declare class UserCount {
    videos: number;
    comments: number;
    likes: number;
    getVideos(root: UserCount, args: UserCountVideosArgs): number;
    getComments(root: UserCount, args: UserCountCommentsArgs): number;
    getLikes(root: UserCount, args: UserCountLikesArgs): number;
}
