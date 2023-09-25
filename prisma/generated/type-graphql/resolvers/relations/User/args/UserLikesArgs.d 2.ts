import { LikeOrderByWithRelationInput } from "../../../inputs/LikeOrderByWithRelationInput";
import { LikeWhereInput } from "../../../inputs/LikeWhereInput";
import { LikeWhereUniqueInput } from "../../../inputs/LikeWhereUniqueInput";
export declare class UserLikesArgs {
    where?: LikeWhereInput | undefined;
    orderBy?: LikeOrderByWithRelationInput[] | undefined;
    cursor?: LikeWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"userId" | "videoId" | "tx"> | undefined;
}
