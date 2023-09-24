import type { GraphQLResolveInfo } from "graphql";
import { AggregateLikeArgs } from "./args/AggregateLikeArgs";
import { CreateManyLikeArgs } from "./args/CreateManyLikeArgs";
import { CreateOneLikeArgs } from "./args/CreateOneLikeArgs";
import { DeleteManyLikeArgs } from "./args/DeleteManyLikeArgs";
import { DeleteOneLikeArgs } from "./args/DeleteOneLikeArgs";
import { FindFirstLikeArgs } from "./args/FindFirstLikeArgs";
import { FindFirstLikeOrThrowArgs } from "./args/FindFirstLikeOrThrowArgs";
import { FindManyLikeArgs } from "./args/FindManyLikeArgs";
import { FindUniqueLikeArgs } from "./args/FindUniqueLikeArgs";
import { FindUniqueLikeOrThrowArgs } from "./args/FindUniqueLikeOrThrowArgs";
import { GroupByLikeArgs } from "./args/GroupByLikeArgs";
import { UpdateManyLikeArgs } from "./args/UpdateManyLikeArgs";
import { UpdateOneLikeArgs } from "./args/UpdateOneLikeArgs";
import { UpsertOneLikeArgs } from "./args/UpsertOneLikeArgs";
import { Like } from "../../../models/Like";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateLike } from "../../outputs/AggregateLike";
import { LikeGroupBy } from "../../outputs/LikeGroupBy";
export declare class LikeCrudResolver {
    aggregateLike(ctx: any, info: GraphQLResolveInfo, args: AggregateLikeArgs): Promise<AggregateLike>;
    createManyLike(ctx: any, info: GraphQLResolveInfo, args: CreateManyLikeArgs): Promise<AffectedRowsOutput>;
    createOneLike(ctx: any, info: GraphQLResolveInfo, args: CreateOneLikeArgs): Promise<Like>;
    deleteManyLike(ctx: any, info: GraphQLResolveInfo, args: DeleteManyLikeArgs): Promise<AffectedRowsOutput>;
    deleteOneLike(ctx: any, info: GraphQLResolveInfo, args: DeleteOneLikeArgs): Promise<Like | null>;
    findFirstLike(ctx: any, info: GraphQLResolveInfo, args: FindFirstLikeArgs): Promise<Like | null>;
    findFirstLikeOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstLikeOrThrowArgs): Promise<Like | null>;
    likes(ctx: any, info: GraphQLResolveInfo, args: FindManyLikeArgs): Promise<Like[]>;
    like(ctx: any, info: GraphQLResolveInfo, args: FindUniqueLikeArgs): Promise<Like | null>;
    getLike(ctx: any, info: GraphQLResolveInfo, args: FindUniqueLikeOrThrowArgs): Promise<Like | null>;
    groupByLike(ctx: any, info: GraphQLResolveInfo, args: GroupByLikeArgs): Promise<LikeGroupBy[]>;
    updateManyLike(ctx: any, info: GraphQLResolveInfo, args: UpdateManyLikeArgs): Promise<AffectedRowsOutput>;
    updateOneLike(ctx: any, info: GraphQLResolveInfo, args: UpdateOneLikeArgs): Promise<Like | null>;
    upsertOneLike(ctx: any, info: GraphQLResolveInfo, args: UpsertOneLikeArgs): Promise<Like>;
}
