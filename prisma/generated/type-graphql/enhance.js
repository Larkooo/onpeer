"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib_1 = require("tslib");
const tslib = tslib_1.__importStar(require("tslib"));
const crudResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = tslib_1.__importStar(require("./resolvers/crud/args.index"));
const actionResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = tslib_1.__importStar(require("./resolvers/relations/resolvers.index"));
const models = tslib_1.__importStar(require("./models"));
const outputTypes = tslib_1.__importStar(require("./resolvers/outputs"));
const inputTypes = tslib_1.__importStar(require("./resolvers/inputs"));
const crudResolversMap = {
    Sync: crudResolvers.SyncCrudResolver,
    User: crudResolvers.UserCrudResolver,
    Comment: crudResolvers.CommentCrudResolver,
    Like: crudResolvers.LikeCrudResolver,
    Video: crudResolvers.VideoCrudResolver
};
const actionResolversMap = {
    Sync: {
        aggregateSync: actionResolvers.AggregateSyncResolver,
        createManySync: actionResolvers.CreateManySyncResolver,
        createOneSync: actionResolvers.CreateOneSyncResolver,
        deleteManySync: actionResolvers.DeleteManySyncResolver,
        deleteOneSync: actionResolvers.DeleteOneSyncResolver,
        findFirstSync: actionResolvers.FindFirstSyncResolver,
        findFirstSyncOrThrow: actionResolvers.FindFirstSyncOrThrowResolver,
        syncs: actionResolvers.FindManySyncResolver,
        sync: actionResolvers.FindUniqueSyncResolver,
        getSync: actionResolvers.FindUniqueSyncOrThrowResolver,
        groupBySync: actionResolvers.GroupBySyncResolver,
        updateManySync: actionResolvers.UpdateManySyncResolver,
        updateOneSync: actionResolvers.UpdateOneSyncResolver,
        upsertOneSync: actionResolvers.UpsertOneSyncResolver
    },
    User: {
        aggregateUser: actionResolvers.AggregateUserResolver,
        createManyUser: actionResolvers.CreateManyUserResolver,
        createOneUser: actionResolvers.CreateOneUserResolver,
        deleteManyUser: actionResolvers.DeleteManyUserResolver,
        deleteOneUser: actionResolvers.DeleteOneUserResolver,
        findFirstUser: actionResolvers.FindFirstUserResolver,
        findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
        users: actionResolvers.FindManyUserResolver,
        user: actionResolvers.FindUniqueUserResolver,
        getUser: actionResolvers.FindUniqueUserOrThrowResolver,
        groupByUser: actionResolvers.GroupByUserResolver,
        updateManyUser: actionResolvers.UpdateManyUserResolver,
        updateOneUser: actionResolvers.UpdateOneUserResolver,
        upsertOneUser: actionResolvers.UpsertOneUserResolver
    },
    Comment: {
        aggregateComment: actionResolvers.AggregateCommentResolver,
        createManyComment: actionResolvers.CreateManyCommentResolver,
        createOneComment: actionResolvers.CreateOneCommentResolver,
        deleteManyComment: actionResolvers.DeleteManyCommentResolver,
        deleteOneComment: actionResolvers.DeleteOneCommentResolver,
        findFirstComment: actionResolvers.FindFirstCommentResolver,
        findFirstCommentOrThrow: actionResolvers.FindFirstCommentOrThrowResolver,
        comments: actionResolvers.FindManyCommentResolver,
        comment: actionResolvers.FindUniqueCommentResolver,
        getComment: actionResolvers.FindUniqueCommentOrThrowResolver,
        groupByComment: actionResolvers.GroupByCommentResolver,
        updateManyComment: actionResolvers.UpdateManyCommentResolver,
        updateOneComment: actionResolvers.UpdateOneCommentResolver,
        upsertOneComment: actionResolvers.UpsertOneCommentResolver
    },
    Like: {
        aggregateLike: actionResolvers.AggregateLikeResolver,
        createManyLike: actionResolvers.CreateManyLikeResolver,
        createOneLike: actionResolvers.CreateOneLikeResolver,
        deleteManyLike: actionResolvers.DeleteManyLikeResolver,
        deleteOneLike: actionResolvers.DeleteOneLikeResolver,
        findFirstLike: actionResolvers.FindFirstLikeResolver,
        findFirstLikeOrThrow: actionResolvers.FindFirstLikeOrThrowResolver,
        likes: actionResolvers.FindManyLikeResolver,
        like: actionResolvers.FindUniqueLikeResolver,
        getLike: actionResolvers.FindUniqueLikeOrThrowResolver,
        groupByLike: actionResolvers.GroupByLikeResolver,
        updateManyLike: actionResolvers.UpdateManyLikeResolver,
        updateOneLike: actionResolvers.UpdateOneLikeResolver,
        upsertOneLike: actionResolvers.UpsertOneLikeResolver
    },
    Video: {
        aggregateVideo: actionResolvers.AggregateVideoResolver,
        createManyVideo: actionResolvers.CreateManyVideoResolver,
        createOneVideo: actionResolvers.CreateOneVideoResolver,
        deleteManyVideo: actionResolvers.DeleteManyVideoResolver,
        deleteOneVideo: actionResolvers.DeleteOneVideoResolver,
        findFirstVideo: actionResolvers.FindFirstVideoResolver,
        findFirstVideoOrThrow: actionResolvers.FindFirstVideoOrThrowResolver,
        videos: actionResolvers.FindManyVideoResolver,
        video: actionResolvers.FindUniqueVideoResolver,
        getVideo: actionResolvers.FindUniqueVideoOrThrowResolver,
        groupByVideo: actionResolvers.GroupByVideoResolver,
        updateManyVideo: actionResolvers.UpdateManyVideoResolver,
        updateOneVideo: actionResolvers.UpdateOneVideoResolver,
        upsertOneVideo: actionResolvers.UpsertOneVideoResolver
    }
};
const crudResolversInfo = {
    Sync: ["aggregateSync", "createManySync", "createOneSync", "deleteManySync", "deleteOneSync", "findFirstSync", "findFirstSyncOrThrow", "syncs", "sync", "getSync", "groupBySync", "updateManySync", "updateOneSync", "upsertOneSync"],
    User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
    Comment: ["aggregateComment", "createManyComment", "createOneComment", "deleteManyComment", "deleteOneComment", "findFirstComment", "findFirstCommentOrThrow", "comments", "comment", "getComment", "groupByComment", "updateManyComment", "updateOneComment", "upsertOneComment"],
    Like: ["aggregateLike", "createManyLike", "createOneLike", "deleteManyLike", "deleteOneLike", "findFirstLike", "findFirstLikeOrThrow", "likes", "like", "getLike", "groupByLike", "updateManyLike", "updateOneLike", "upsertOneLike"],
    Video: ["aggregateVideo", "createManyVideo", "createOneVideo", "deleteManyVideo", "deleteOneVideo", "findFirstVideo", "findFirstVideoOrThrow", "videos", "video", "getVideo", "groupByVideo", "updateManyVideo", "updateOneVideo", "upsertOneVideo"]
};
const argsInfo = {
    AggregateSyncArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManySyncArgs: ["data", "skipDuplicates"],
    CreateOneSyncArgs: ["data"],
    DeleteManySyncArgs: ["where"],
    DeleteOneSyncArgs: ["where"],
    FindFirstSyncArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstSyncOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManySyncArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueSyncArgs: ["where"],
    FindUniqueSyncOrThrowArgs: ["where"],
    GroupBySyncArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManySyncArgs: ["data", "where"],
    UpdateOneSyncArgs: ["data", "where"],
    UpsertOneSyncArgs: ["where", "create", "update"],
    AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyUserArgs: ["data", "skipDuplicates"],
    CreateOneUserArgs: ["data"],
    DeleteManyUserArgs: ["where"],
    DeleteOneUserArgs: ["where"],
    FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueUserArgs: ["where"],
    FindUniqueUserOrThrowArgs: ["where"],
    GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyUserArgs: ["data", "where"],
    UpdateOneUserArgs: ["data", "where"],
    UpsertOneUserArgs: ["where", "create", "update"],
    AggregateCommentArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyCommentArgs: ["data", "skipDuplicates"],
    CreateOneCommentArgs: ["data"],
    DeleteManyCommentArgs: ["where"],
    DeleteOneCommentArgs: ["where"],
    FindFirstCommentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstCommentOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyCommentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueCommentArgs: ["where"],
    FindUniqueCommentOrThrowArgs: ["where"],
    GroupByCommentArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyCommentArgs: ["data", "where"],
    UpdateOneCommentArgs: ["data", "where"],
    UpsertOneCommentArgs: ["where", "create", "update"],
    AggregateLikeArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyLikeArgs: ["data", "skipDuplicates"],
    CreateOneLikeArgs: ["data"],
    DeleteManyLikeArgs: ["where"],
    DeleteOneLikeArgs: ["where"],
    FindFirstLikeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstLikeOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyLikeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueLikeArgs: ["where"],
    FindUniqueLikeOrThrowArgs: ["where"],
    GroupByLikeArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyLikeArgs: ["data", "where"],
    UpdateOneLikeArgs: ["data", "where"],
    UpsertOneLikeArgs: ["where", "create", "update"],
    AggregateVideoArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyVideoArgs: ["data", "skipDuplicates"],
    CreateOneVideoArgs: ["data"],
    DeleteManyVideoArgs: ["where"],
    DeleteOneVideoArgs: ["where"],
    FindFirstVideoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstVideoOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyVideoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueVideoArgs: ["where"],
    FindUniqueVideoOrThrowArgs: ["where"],
    GroupByVideoArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyVideoArgs: ["data", "where"],
    UpdateOneVideoArgs: ["data", "where"],
    UpsertOneVideoArgs: ["where", "create", "update"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    const mutationOperationPrefixes = [
        "createOne", "createMany", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
    ];
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        const allActionsDecorators = resolverActionsConfig._all;
        const resolverActionNames = crudResolversInfo[modelName];
        for (const resolverActionName of resolverActionNames) {
            const maybeDecoratorsOrFn = resolverActionsConfig[resolverActionName];
            const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
            const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
            const mainDecorators = [
                ...allActionsDecorators !== null && allActionsDecorators !== void 0 ? allActionsDecorators : [],
                ...operationKindDecorators !== null && operationKindDecorators !== void 0 ? operationKindDecorators : [],
            ];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(mainDecorators);
            }
            else {
                decorators = [...mainDecorators, ...maybeDecoratorsOrFn !== null && maybeDecoratorsOrFn !== void 0 ? maybeDecoratorsOrFn : []];
            }
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
const relationResolversMap = {
    User: relationResolvers.UserRelationsResolver,
    Comment: relationResolvers.CommentRelationsResolver,
    Like: relationResolvers.LikeRelationsResolver,
    Video: relationResolvers.VideoRelationsResolver
};
const relationResolversInfo = {
    User: ["videos", "comments", "likes"],
    Comment: ["user", "video"],
    Like: ["user", "video"],
    Video: ["author", "comments", "likes"]
};
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    var _a;
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        const allActionsDecorators = (_a = relationResolverActionsConfig._all) !== null && _a !== void 0 ? _a : [];
        const relationResolverActionNames = relationResolversInfo[modelName];
        for (const relationResolverActionName of relationResolverActionNames) {
            const maybeDecoratorsOrFn = relationResolverActionsConfig[relationResolverActionName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allActionsDecorators);
            }
            else {
                decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn !== null && maybeDecoratorsOrFn !== void 0 ? maybeDecoratorsOrFn : []];
            }
            tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    var _a;
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        const allFieldsDecorators = (_a = enhanceConfig.fields._all) !== null && _a !== void 0 ? _a : [];
        for (const typeFieldName of typeFieldNames) {
            const maybeDecoratorsOrFn = enhanceConfig.fields[typeFieldName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allFieldsDecorators);
            }
            else {
                decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn !== null && maybeDecoratorsOrFn !== void 0 ? maybeDecoratorsOrFn : []];
            }
            tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    Sync: ["chainId", "latestBlockNumber"],
    User: ["id"],
    Comment: ["id", "text", "userId", "videoId", "tx"],
    Like: ["userId", "videoId", "tx"],
    Video: ["id", "tokenId", "title", "description", "authorId", "mintTx", "playbackId", "createdAt"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateSync: ["_count", "_avg", "_sum", "_min", "_max"],
    SyncGroupBy: ["chainId", "latestBlockNumber", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateUser: ["_count", "_min", "_max"],
    UserGroupBy: ["id", "_count", "_min", "_max"],
    AggregateComment: ["_count", "_min", "_max"],
    CommentGroupBy: ["id", "text", "userId", "videoId", "tx", "_count", "_min", "_max"],
    AggregateLike: ["_count", "_min", "_max"],
    LikeGroupBy: ["userId", "videoId", "tx", "_count", "_min", "_max"],
    AggregateVideo: ["_count", "_min", "_max"],
    VideoGroupBy: ["id", "tokenId", "title", "description", "authorId", "mintTx", "mintSignature", "playbackId", "createdAt", "_count", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    SyncCountAggregate: ["chainId", "latestBlockNumber", "_all"],
    SyncAvgAggregate: ["chainId", "latestBlockNumber"],
    SyncSumAggregate: ["chainId", "latestBlockNumber"],
    SyncMinAggregate: ["chainId", "latestBlockNumber"],
    SyncMaxAggregate: ["chainId", "latestBlockNumber"],
    UserCount: ["videos", "comments", "likes"],
    UserCountAggregate: ["id", "_all"],
    UserMinAggregate: ["id"],
    UserMaxAggregate: ["id"],
    CommentCountAggregate: ["id", "text", "userId", "videoId", "tx", "_all"],
    CommentMinAggregate: ["id", "text", "userId", "videoId", "tx"],
    CommentMaxAggregate: ["id", "text", "userId", "videoId", "tx"],
    LikeCountAggregate: ["userId", "videoId", "tx", "_all"],
    LikeMinAggregate: ["userId", "videoId", "tx"],
    LikeMaxAggregate: ["userId", "videoId", "tx"],
    VideoCount: ["comments", "likes"],
    VideoCountAggregate: ["id", "tokenId", "title", "description", "authorId", "mintTx", "mintSignature", "playbackId", "createdAt", "_all"],
    VideoMinAggregate: ["id", "tokenId", "title", "description", "authorId", "mintTx", "playbackId", "createdAt"],
    VideoMaxAggregate: ["id", "tokenId", "title", "description", "authorId", "mintTx", "playbackId", "createdAt"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    SyncWhereInput: ["AND", "OR", "NOT", "chainId", "latestBlockNumber"],
    SyncOrderByWithRelationInput: ["chainId", "latestBlockNumber"],
    SyncWhereUniqueInput: ["chainId", "AND", "OR", "NOT", "latestBlockNumber"],
    SyncOrderByWithAggregationInput: ["chainId", "latestBlockNumber", "_count", "_avg", "_max", "_min", "_sum"],
    SyncScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "chainId", "latestBlockNumber"],
    UserWhereInput: ["AND", "OR", "NOT", "id", "videos", "comments", "likes"],
    UserOrderByWithRelationInput: ["id", "videos", "comments", "likes"],
    UserWhereUniqueInput: ["id", "AND", "OR", "NOT", "videos", "comments", "likes"],
    UserOrderByWithAggregationInput: ["id", "_count", "_max", "_min"],
    UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id"],
    CommentWhereInput: ["AND", "OR", "NOT", "id", "text", "userId", "videoId", "tx", "user", "video"],
    CommentOrderByWithRelationInput: ["id", "text", "userId", "videoId", "tx", "user", "video"],
    CommentWhereUniqueInput: ["id", "AND", "OR", "NOT", "text", "userId", "videoId", "tx", "user", "video"],
    CommentOrderByWithAggregationInput: ["id", "text", "userId", "videoId", "tx", "_count", "_max", "_min"],
    CommentScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "text", "userId", "videoId", "tx"],
    LikeWhereInput: ["AND", "OR", "NOT", "userId", "videoId", "tx", "user", "video"],
    LikeOrderByWithRelationInput: ["userId", "videoId", "tx", "user", "video"],
    LikeWhereUniqueInput: ["userId_videoId", "AND", "OR", "NOT", "userId", "videoId", "tx", "user", "video"],
    LikeOrderByWithAggregationInput: ["userId", "videoId", "tx", "_count", "_max", "_min"],
    LikeScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "userId", "videoId", "tx"],
    VideoWhereInput: ["AND", "OR", "NOT", "id", "tokenId", "title", "description", "authorId", "mintTx", "mintSignature", "playbackId", "createdAt", "author", "comments", "likes"],
    VideoOrderByWithRelationInput: ["id", "tokenId", "title", "description", "authorId", "mintTx", "mintSignature", "playbackId", "createdAt", "author", "comments", "likes"],
    VideoWhereUniqueInput: ["id", "AND", "OR", "NOT", "tokenId", "title", "description", "authorId", "mintTx", "mintSignature", "playbackId", "createdAt", "author", "comments", "likes"],
    VideoOrderByWithAggregationInput: ["id", "tokenId", "title", "description", "authorId", "mintTx", "mintSignature", "playbackId", "createdAt", "_count", "_max", "_min"],
    VideoScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "tokenId", "title", "description", "authorId", "mintTx", "mintSignature", "playbackId", "createdAt"],
    SyncCreateInput: ["chainId", "latestBlockNumber"],
    SyncUpdateInput: ["chainId", "latestBlockNumber"],
    SyncCreateManyInput: ["chainId", "latestBlockNumber"],
    SyncUpdateManyMutationInput: ["chainId", "latestBlockNumber"],
    UserCreateInput: ["id", "videos", "comments", "likes"],
    UserUpdateInput: ["id", "videos", "comments", "likes"],
    UserCreateManyInput: ["id"],
    UserUpdateManyMutationInput: ["id"],
    CommentCreateInput: ["id", "text", "tx", "user", "video"],
    CommentUpdateInput: ["id", "text", "tx", "user", "video"],
    CommentCreateManyInput: ["id", "text", "userId", "videoId", "tx"],
    CommentUpdateManyMutationInput: ["id", "text", "tx"],
    LikeCreateInput: ["tx", "user", "video"],
    LikeUpdateInput: ["tx", "user", "video"],
    LikeCreateManyInput: ["userId", "videoId", "tx"],
    LikeUpdateManyMutationInput: ["tx"],
    VideoCreateInput: ["id", "tokenId", "title", "description", "mintTx", "mintSignature", "playbackId", "createdAt", "author", "comments", "likes"],
    VideoUpdateInput: ["id", "tokenId", "title", "description", "mintTx", "mintSignature", "playbackId", "createdAt", "author", "comments", "likes"],
    VideoCreateManyInput: ["id", "tokenId", "title", "description", "authorId", "mintTx", "mintSignature", "playbackId", "createdAt"],
    VideoUpdateManyMutationInput: ["id", "tokenId", "title", "description", "mintTx", "mintSignature", "playbackId", "createdAt"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    SyncCountOrderByAggregateInput: ["chainId", "latestBlockNumber"],
    SyncAvgOrderByAggregateInput: ["chainId", "latestBlockNumber"],
    SyncMaxOrderByAggregateInput: ["chainId", "latestBlockNumber"],
    SyncMinOrderByAggregateInput: ["chainId", "latestBlockNumber"],
    SyncSumOrderByAggregateInput: ["chainId", "latestBlockNumber"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    VideoListRelationFilter: ["every", "some", "none"],
    CommentListRelationFilter: ["every", "some", "none"],
    LikeListRelationFilter: ["every", "some", "none"],
    VideoOrderByRelationAggregateInput: ["_count"],
    CommentOrderByRelationAggregateInput: ["_count"],
    LikeOrderByRelationAggregateInput: ["_count"],
    UserCountOrderByAggregateInput: ["id"],
    UserMaxOrderByAggregateInput: ["id"],
    UserMinOrderByAggregateInput: ["id"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    UserRelationFilter: ["is", "isNot"],
    VideoRelationFilter: ["is", "isNot"],
    CommentCountOrderByAggregateInput: ["id", "text", "userId", "videoId", "tx"],
    CommentMaxOrderByAggregateInput: ["id", "text", "userId", "videoId", "tx"],
    CommentMinOrderByAggregateInput: ["id", "text", "userId", "videoId", "tx"],
    LikeUserIdVideoIdCompoundUniqueInput: ["userId", "videoId"],
    LikeCountOrderByAggregateInput: ["userId", "videoId", "tx"],
    LikeMaxOrderByAggregateInput: ["userId", "videoId", "tx"],
    LikeMinOrderByAggregateInput: ["userId", "videoId", "tx"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    JsonNullableFilter: ["equals", "path", "string_contains", "string_starts_with", "string_ends_with", "array_contains", "array_starts_with", "array_ends_with", "lt", "lte", "gt", "gte", "not"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    SortOrderInput: ["sort", "nulls"],
    VideoCountOrderByAggregateInput: ["id", "tokenId", "title", "description", "authorId", "mintTx", "mintSignature", "playbackId", "createdAt"],
    VideoMaxOrderByAggregateInput: ["id", "tokenId", "title", "description", "authorId", "mintTx", "playbackId", "createdAt"],
    VideoMinOrderByAggregateInput: ["id", "tokenId", "title", "description", "authorId", "mintTx", "playbackId", "createdAt"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    JsonNullableWithAggregatesFilter: ["equals", "path", "string_contains", "string_starts_with", "string_ends_with", "array_contains", "array_starts_with", "array_ends_with", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    VideoCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
    CommentCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    LikeCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    VideoUpdateManyWithoutAuthorNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    CommentUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    LikeUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    UserCreateNestedOneWithoutCommentsInput: ["create", "connectOrCreate", "connect"],
    VideoCreateNestedOneWithoutCommentsInput: ["create", "connectOrCreate", "connect"],
    UserUpdateOneRequiredWithoutCommentsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    VideoUpdateOneRequiredWithoutCommentsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UserCreateNestedOneWithoutLikesInput: ["create", "connectOrCreate", "connect"],
    VideoCreateNestedOneWithoutLikesInput: ["create", "connectOrCreate", "connect"],
    UserUpdateOneRequiredWithoutLikesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    VideoUpdateOneRequiredWithoutLikesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UserCreateNestedOneWithoutVideosInput: ["create", "connectOrCreate", "connect"],
    CommentCreateNestedManyWithoutVideoInput: ["create", "connectOrCreate", "createMany", "connect"],
    LikeCreateNestedManyWithoutVideoInput: ["create", "connectOrCreate", "createMany", "connect"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    UserUpdateOneRequiredWithoutVideosNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    CommentUpdateManyWithoutVideoNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    LikeUpdateManyWithoutVideoNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedJsonNullableFilter: ["equals", "path", "string_contains", "string_starts_with", "string_ends_with", "array_contains", "array_starts_with", "array_ends_with", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    VideoCreateWithoutAuthorInput: ["id", "tokenId", "title", "description", "mintTx", "mintSignature", "playbackId", "createdAt", "comments", "likes"],
    VideoCreateOrConnectWithoutAuthorInput: ["where", "create"],
    VideoCreateManyAuthorInputEnvelope: ["data", "skipDuplicates"],
    CommentCreateWithoutUserInput: ["id", "text", "tx", "video"],
    CommentCreateOrConnectWithoutUserInput: ["where", "create"],
    CommentCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    LikeCreateWithoutUserInput: ["tx", "video"],
    LikeCreateOrConnectWithoutUserInput: ["where", "create"],
    LikeCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    VideoUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
    VideoUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
    VideoUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
    VideoScalarWhereInput: ["AND", "OR", "NOT", "id", "tokenId", "title", "description", "authorId", "mintTx", "mintSignature", "playbackId", "createdAt"],
    CommentUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    CommentUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    CommentUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    CommentScalarWhereInput: ["AND", "OR", "NOT", "id", "text", "userId", "videoId", "tx"],
    LikeUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    LikeUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    LikeUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    LikeScalarWhereInput: ["AND", "OR", "NOT", "userId", "videoId", "tx"],
    UserCreateWithoutCommentsInput: ["id", "videos", "likes"],
    UserCreateOrConnectWithoutCommentsInput: ["where", "create"],
    VideoCreateWithoutCommentsInput: ["id", "tokenId", "title", "description", "mintTx", "mintSignature", "playbackId", "createdAt", "author", "likes"],
    VideoCreateOrConnectWithoutCommentsInput: ["where", "create"],
    UserUpsertWithoutCommentsInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutCommentsInput: ["where", "data"],
    UserUpdateWithoutCommentsInput: ["id", "videos", "likes"],
    VideoUpsertWithoutCommentsInput: ["update", "create", "where"],
    VideoUpdateToOneWithWhereWithoutCommentsInput: ["where", "data"],
    VideoUpdateWithoutCommentsInput: ["id", "tokenId", "title", "description", "mintTx", "mintSignature", "playbackId", "createdAt", "author", "likes"],
    UserCreateWithoutLikesInput: ["id", "videos", "comments"],
    UserCreateOrConnectWithoutLikesInput: ["where", "create"],
    VideoCreateWithoutLikesInput: ["id", "tokenId", "title", "description", "mintTx", "mintSignature", "playbackId", "createdAt", "author", "comments"],
    VideoCreateOrConnectWithoutLikesInput: ["where", "create"],
    UserUpsertWithoutLikesInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutLikesInput: ["where", "data"],
    UserUpdateWithoutLikesInput: ["id", "videos", "comments"],
    VideoUpsertWithoutLikesInput: ["update", "create", "where"],
    VideoUpdateToOneWithWhereWithoutLikesInput: ["where", "data"],
    VideoUpdateWithoutLikesInput: ["id", "tokenId", "title", "description", "mintTx", "mintSignature", "playbackId", "createdAt", "author", "comments"],
    UserCreateWithoutVideosInput: ["id", "comments", "likes"],
    UserCreateOrConnectWithoutVideosInput: ["where", "create"],
    CommentCreateWithoutVideoInput: ["id", "text", "tx", "user"],
    CommentCreateOrConnectWithoutVideoInput: ["where", "create"],
    CommentCreateManyVideoInputEnvelope: ["data", "skipDuplicates"],
    LikeCreateWithoutVideoInput: ["tx", "user"],
    LikeCreateOrConnectWithoutVideoInput: ["where", "create"],
    LikeCreateManyVideoInputEnvelope: ["data", "skipDuplicates"],
    UserUpsertWithoutVideosInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutVideosInput: ["where", "data"],
    UserUpdateWithoutVideosInput: ["id", "comments", "likes"],
    CommentUpsertWithWhereUniqueWithoutVideoInput: ["where", "update", "create"],
    CommentUpdateWithWhereUniqueWithoutVideoInput: ["where", "data"],
    CommentUpdateManyWithWhereWithoutVideoInput: ["where", "data"],
    LikeUpsertWithWhereUniqueWithoutVideoInput: ["where", "update", "create"],
    LikeUpdateWithWhereUniqueWithoutVideoInput: ["where", "data"],
    LikeUpdateManyWithWhereWithoutVideoInput: ["where", "data"],
    VideoCreateManyAuthorInput: ["id", "tokenId", "title", "description", "mintTx", "mintSignature", "playbackId", "createdAt"],
    CommentCreateManyUserInput: ["id", "text", "videoId", "tx"],
    LikeCreateManyUserInput: ["videoId", "tx"],
    VideoUpdateWithoutAuthorInput: ["id", "tokenId", "title", "description", "mintTx", "mintSignature", "playbackId", "createdAt", "comments", "likes"],
    CommentUpdateWithoutUserInput: ["id", "text", "tx", "video"],
    LikeUpdateWithoutUserInput: ["tx", "video"],
    CommentCreateManyVideoInput: ["id", "text", "userId", "tx"],
    LikeCreateManyVideoInput: ["userId", "tx"],
    CommentUpdateWithoutVideoInput: ["id", "text", "tx", "user"],
    LikeUpdateWithoutVideoInput: ["tx", "user"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
