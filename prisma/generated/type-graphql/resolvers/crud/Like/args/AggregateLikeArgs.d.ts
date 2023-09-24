import { LikeOrderByWithRelationInput } from "../../../inputs/LikeOrderByWithRelationInput";
import { LikeWhereInput } from "../../../inputs/LikeWhereInput";
import { LikeWhereUniqueInput } from "../../../inputs/LikeWhereUniqueInput";
export declare class AggregateLikeArgs {
    where?: LikeWhereInput | undefined;
    orderBy?: LikeOrderByWithRelationInput[] | undefined;
    cursor?: LikeWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
