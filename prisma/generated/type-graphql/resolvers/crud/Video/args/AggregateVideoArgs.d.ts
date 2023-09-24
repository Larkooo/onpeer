import { VideoOrderByWithRelationInput } from "../../../inputs/VideoOrderByWithRelationInput";
import { VideoWhereInput } from "../../../inputs/VideoWhereInput";
import { VideoWhereUniqueInput } from "../../../inputs/VideoWhereUniqueInput";
export declare class AggregateVideoArgs {
    where?: VideoWhereInput | undefined;
    orderBy?: VideoOrderByWithRelationInput[] | undefined;
    cursor?: VideoWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
