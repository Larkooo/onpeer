import type { GraphQLResolveInfo } from "graphql";
import { AggregateVideoArgs } from "./args/AggregateVideoArgs";
import { CreateManyVideoArgs } from "./args/CreateManyVideoArgs";
import { CreateOneVideoArgs } from "./args/CreateOneVideoArgs";
import { DeleteManyVideoArgs } from "./args/DeleteManyVideoArgs";
import { DeleteOneVideoArgs } from "./args/DeleteOneVideoArgs";
import { FindFirstVideoArgs } from "./args/FindFirstVideoArgs";
import { FindFirstVideoOrThrowArgs } from "./args/FindFirstVideoOrThrowArgs";
import { FindManyVideoArgs } from "./args/FindManyVideoArgs";
import { FindUniqueVideoArgs } from "./args/FindUniqueVideoArgs";
import { FindUniqueVideoOrThrowArgs } from "./args/FindUniqueVideoOrThrowArgs";
import { GroupByVideoArgs } from "./args/GroupByVideoArgs";
import { UpdateManyVideoArgs } from "./args/UpdateManyVideoArgs";
import { UpdateOneVideoArgs } from "./args/UpdateOneVideoArgs";
import { UpsertOneVideoArgs } from "./args/UpsertOneVideoArgs";
import { Video } from "../../../models/Video";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateVideo } from "../../outputs/AggregateVideo";
import { VideoGroupBy } from "../../outputs/VideoGroupBy";
export declare class VideoCrudResolver {
    aggregateVideo(ctx: any, info: GraphQLResolveInfo, args: AggregateVideoArgs): Promise<AggregateVideo>;
    createManyVideo(ctx: any, info: GraphQLResolveInfo, args: CreateManyVideoArgs): Promise<AffectedRowsOutput>;
    createOneVideo(ctx: any, info: GraphQLResolveInfo, args: CreateOneVideoArgs): Promise<Video>;
    deleteManyVideo(ctx: any, info: GraphQLResolveInfo, args: DeleteManyVideoArgs): Promise<AffectedRowsOutput>;
    deleteOneVideo(ctx: any, info: GraphQLResolveInfo, args: DeleteOneVideoArgs): Promise<Video | null>;
    findFirstVideo(ctx: any, info: GraphQLResolveInfo, args: FindFirstVideoArgs): Promise<Video | null>;
    findFirstVideoOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstVideoOrThrowArgs): Promise<Video | null>;
    videos(ctx: any, info: GraphQLResolveInfo, args: FindManyVideoArgs): Promise<Video[]>;
    video(ctx: any, info: GraphQLResolveInfo, args: FindUniqueVideoArgs): Promise<Video | null>;
    getVideo(ctx: any, info: GraphQLResolveInfo, args: FindUniqueVideoOrThrowArgs): Promise<Video | null>;
    groupByVideo(ctx: any, info: GraphQLResolveInfo, args: GroupByVideoArgs): Promise<VideoGroupBy[]>;
    updateManyVideo(ctx: any, info: GraphQLResolveInfo, args: UpdateManyVideoArgs): Promise<AffectedRowsOutput>;
    updateOneVideo(ctx: any, info: GraphQLResolveInfo, args: UpdateOneVideoArgs): Promise<Video | null>;
    upsertOneVideo(ctx: any, info: GraphQLResolveInfo, args: UpsertOneVideoArgs): Promise<Video>;
}
