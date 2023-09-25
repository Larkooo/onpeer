import { VideoOrderByWithAggregationInput } from "../../../inputs/VideoOrderByWithAggregationInput";
import { VideoScalarWhereWithAggregatesInput } from "../../../inputs/VideoScalarWhereWithAggregatesInput";
import { VideoWhereInput } from "../../../inputs/VideoWhereInput";
export declare class GroupByVideoArgs {
    where?: VideoWhereInput | undefined;
    orderBy?: VideoOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "tokenId" | "title" | "description" | "authorId" | "mintTx" | "mintSignature" | "playbackId" | "createdAt">;
    having?: VideoScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
