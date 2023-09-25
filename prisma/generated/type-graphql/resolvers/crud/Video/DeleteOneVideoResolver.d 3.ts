import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneVideoArgs } from "./args/DeleteOneVideoArgs";
import { Video } from "../../../models/Video";
export declare class DeleteOneVideoResolver {
    deleteOneVideo(ctx: any, info: GraphQLResolveInfo, args: DeleteOneVideoArgs): Promise<Video | null>;
}
