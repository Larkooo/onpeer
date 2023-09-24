import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneVideoArgs } from "./args/UpdateOneVideoArgs";
import { Video } from "../../../models/Video";
export declare class UpdateOneVideoResolver {
    updateOneVideo(ctx: any, info: GraphQLResolveInfo, args: UpdateOneVideoArgs): Promise<Video | null>;
}
