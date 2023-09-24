import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneVideoArgs } from "./args/UpsertOneVideoArgs";
import { Video } from "../../../models/Video";
export declare class UpsertOneVideoResolver {
    upsertOneVideo(ctx: any, info: GraphQLResolveInfo, args: UpsertOneVideoArgs): Promise<Video>;
}
