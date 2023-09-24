import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueVideoArgs } from "./args/FindUniqueVideoArgs";
import { Video } from "../../../models/Video";
export declare class FindUniqueVideoResolver {
    video(ctx: any, info: GraphQLResolveInfo, args: FindUniqueVideoArgs): Promise<Video | null>;
}
