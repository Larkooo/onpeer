import type { GraphQLResolveInfo } from "graphql";
import { FindFirstVideoOrThrowArgs } from "./args/FindFirstVideoOrThrowArgs";
import { Video } from "../../../models/Video";
export declare class FindFirstVideoOrThrowResolver {
    findFirstVideoOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstVideoOrThrowArgs): Promise<Video | null>;
}
