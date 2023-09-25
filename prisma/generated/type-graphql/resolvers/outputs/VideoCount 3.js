"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VideoCountCommentsArgs_1 = require("./args/VideoCountCommentsArgs");
const VideoCountLikesArgs_1 = require("./args/VideoCountLikesArgs");
let VideoCount = exports.VideoCount = class VideoCount {
    getComments(root, args) {
        return root.comments;
    }
    getLikes(root, args) {
        return root.likes;
    }
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "comments",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [VideoCount, VideoCountCommentsArgs_1.VideoCountCommentsArgs]),
    tslib_1.__metadata("design:returntype", Number)
], VideoCount.prototype, "getComments", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "likes",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [VideoCount, VideoCountLikesArgs_1.VideoCountLikesArgs]),
    tslib_1.__metadata("design:returntype", Number)
], VideoCount.prototype, "getLikes", null);
exports.VideoCount = VideoCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("VideoCount", {})
], VideoCount);
