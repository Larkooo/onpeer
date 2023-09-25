"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoCreateWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const client_1 = require("@prisma/client");
const LikeCreateNestedManyWithoutVideoInput_1 = require("../inputs/LikeCreateNestedManyWithoutVideoInput");
const UserCreateNestedOneWithoutVideosInput_1 = require("../inputs/UserCreateNestedOneWithoutVideosInput");
let VideoCreateWithoutCommentsInput = exports.VideoCreateWithoutCommentsInput = class VideoCreateWithoutCommentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VideoCreateWithoutCommentsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VideoCreateWithoutCommentsInput.prototype, "tokenId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VideoCreateWithoutCommentsInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VideoCreateWithoutCommentsInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VideoCreateWithoutCommentsInput.prototype, "mintTx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Object)
], VideoCreateWithoutCommentsInput.prototype, "mintSignature", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VideoCreateWithoutCommentsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutVideosInput_1.UserCreateNestedOneWithoutVideosInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutVideosInput_1.UserCreateNestedOneWithoutVideosInput)
], VideoCreateWithoutCommentsInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeCreateNestedManyWithoutVideoInput_1.LikeCreateNestedManyWithoutVideoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeCreateNestedManyWithoutVideoInput_1.LikeCreateNestedManyWithoutVideoInput)
], VideoCreateWithoutCommentsInput.prototype, "likes", void 0);
exports.VideoCreateWithoutCommentsInput = VideoCreateWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VideoCreateWithoutCommentsInput", {})
], VideoCreateWithoutCommentsInput);
