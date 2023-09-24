import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueVideoOrThrowArgs } from "./args/FindUniqueVideoOrThrowArgs";
import { Video } from "../../../models/Video";
export declare class FindUniqueVideoOrThrowResolver {
    getVideo(ctx: any, info: GraphQLResolveInfo, args: FindUniqueVideoOrThrowArgs): Promise<Video | null>;
}
