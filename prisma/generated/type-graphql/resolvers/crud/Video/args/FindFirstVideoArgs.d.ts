import { VideoOrderByWithRelationInput } from "../../../inputs/VideoOrderByWithRelationInput";
import { VideoWhereInput } from "../../../inputs/VideoWhereInput";
import { VideoWhereUniqueInput } from "../../../inputs/VideoWhereUniqueInput";
export declare class FindFirstVideoArgs {
    where?: VideoWhereInput | undefined;
    orderBy?: VideoOrderByWithRelationInput[] | undefined;
    cursor?: VideoWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "tokenId" | "title" | "description" | "authorId" | "mintTx" | "mintSignature" | "playbackId" | "createdAt"> | undefined;
}
