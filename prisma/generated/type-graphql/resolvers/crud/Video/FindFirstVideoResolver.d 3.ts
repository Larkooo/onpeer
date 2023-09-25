import type { GraphQLResolveInfo } from "graphql";
import { FindFirstVideoArgs } from "./args/FindFirstVideoArgs";
import { Video } from "../../../models/Video";
export declare class FindFirstVideoResolver {
    findFirstVideo(ctx: any, info: GraphQLResolveInfo, args: FindFirstVideoArgs): Promise<Video | null>;
}
