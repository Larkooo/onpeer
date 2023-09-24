import { User } from "../models/User";
import { Video } from "../models/Video";
export declare class Like {
    user?: User;
    userId: string;
    video?: Video;
    videoId: string;
    tx: string;
}
