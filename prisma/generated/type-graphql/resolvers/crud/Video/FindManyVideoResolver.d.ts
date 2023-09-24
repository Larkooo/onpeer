import type { GraphQLResolveInfo } from "graphql";
import { FindManyVideoArgs } from "./args/FindManyVideoArgs";
import { Video } from "../../../models/Video";
export declare class FindManyVideoResolver {
    videos(ctx: any, info: GraphQLResolveInfo, args: FindManyVideoArgs): Promise<Video[]>;
}
