import { VideoOrderByWithRelationInput } from "../../../inputs/VideoOrderByWithRelationInput";
import { VideoWhereInput } from "../../../inputs/VideoWhereInput";
import { VideoWhereUniqueInput } from "../../../inputs/VideoWhereUniqueInput";
export declare class UserVideosArgs {
    where?: VideoWhereInput | undefined;
    orderBy?: VideoOrderByWithRelationInput[] | undefined;
    cursor?: VideoWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "title" | "description" | "authorId" | "mintTx" | "createdAt"> | undefined;
}