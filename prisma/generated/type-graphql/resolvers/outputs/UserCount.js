"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCountCommentsArgs_1 = require("./args/UserCountCommentsArgs");
const UserCountLikesArgs_1 = require("./args/UserCountLikesArgs");
const UserCountVideosArgs_1 = require("./args/UserCountVideosArgs");
let UserCount = exports.UserCount = class UserCount {
    getVideos(root, args) {
        return root.videos;
    }
    getComments(root, args) {
        return root.comments;
    }
    getLikes(root, args) {
        return root.likes;
    }
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "videos",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UserCount, UserCountVideosArgs_1.UserCountVideosArgs]),
    tslib_1.__metadata("design:returntype", Number)
], UserCount.prototype, "getVideos", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "comments",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UserCount, UserCountCommentsArgs_1.UserCountCommentsArgs]),
    tslib_1.__metadata("design:returntype", Number)
], UserCount.prototype, "getComments", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "likes",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UserCount, UserCountLikesArgs_1.UserCountLikesArgs]),
    tslib_1.__metadata("design:returntype", Number)
], UserCount.prototype, "getLikes", null);
exports.UserCount = UserCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("UserCount", {})
], UserCount);
