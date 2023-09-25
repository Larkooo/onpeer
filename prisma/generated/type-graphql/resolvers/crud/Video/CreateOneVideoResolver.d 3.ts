import type { GraphQLResolveInfo } from "graphql";
import { CreateOneVideoArgs } from "./args/CreateOneVideoArgs";
import { Video } from "../../../models/Video";
export declare class CreateOneVideoResolver {
    createOneVideo(ctx: any, info: GraphQLResolveInfo, args: CreateOneVideoArgs): Promise<Video>;
}
