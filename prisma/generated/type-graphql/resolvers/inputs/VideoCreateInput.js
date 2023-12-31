"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const client_1 = require("@prisma/client");
const CommentCreateNestedManyWithoutVideoInput_1 = require("../inputs/CommentCreateNestedManyWithoutVideoInput");
const LikeCreateNestedManyWithoutVideoInput_1 = require("../inputs/LikeCreateNestedManyWithoutVideoInput");
const UserCreateNestedOneWithoutVideosInput_1 = require("../inputs/UserCreateNestedOneWithoutVideosInput");
let VideoCreateInput = exports.VideoCreateInput = class VideoCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VideoCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VideoCreateInput.prototype, "tokenId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VideoCreateInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VideoCreateInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VideoCreateInput.prototype, "mintTx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Object)
], VideoCreateInput.prototype, "mintSignature", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VideoCreateInput.prototype, "playbackId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VideoCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutVideosInput_1.UserCreateNestedOneWithoutVideosInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutVideosInput_1.UserCreateNestedOneWithoutVideosInput)
], VideoCreateInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutVideoInput_1.CommentCreateNestedManyWithoutVideoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateNestedManyWithoutVideoInput_1.CommentCreateNestedManyWithoutVideoInput)
], VideoCreateInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeCreateNestedManyWithoutVideoInput_1.LikeCreateNestedManyWithoutVideoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeCreateNestedManyWithoutVideoInput_1.LikeCreateNestedManyWithoutVideoInput)
], VideoCreateInput.prototype, "likes", void 0);
exports.VideoCreateInput = VideoCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VideoCreateInput", {})
], VideoCreateInput);
