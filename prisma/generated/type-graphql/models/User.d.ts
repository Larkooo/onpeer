import { Comment } from "../models/Comment";
import { Like } from "../models/Like";
import { Video } from "../models/Video";
import { UserCount } from "../resolvers/outputs/UserCount";
export declare class User {
    id: string;
    videos?: Video[];
    comments?: Comment[];
    likes?: Like[];
    _count?: UserCount | null;
}
