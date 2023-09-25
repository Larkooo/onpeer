"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoCreateWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const CommentCreateNestedManyWithoutVideoInput_1 = require("../inputs/CommentCreateNestedManyWithoutVideoInput");
const LikeCreateNestedManyWithoutVideoInput_1 = require("../inputs/LikeCreateNestedManyWithoutVideoInput");
let VideoCreateWithoutAuthorInput = exports.VideoCreateWithoutAuthorInput = class VideoCreateWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VideoCreateWithoutAuthorInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], VideoCreateWithoutAuthorInput.prototype, "tokenId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VideoCreateWithoutAuthorInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VideoCreateWithoutAuthorInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VideoCreateWithoutAuthorInput.prototype, "mintTx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VideoCreateWithoutAuthorInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutVideoInput_1.CommentCreateNestedManyWithoutVideoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateNestedManyWithoutVideoInput_1.CommentCreateNestedManyWithoutVideoInput)
], VideoCreateWithoutAuthorInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeCreateNestedManyWithoutVideoInput_1.LikeCreateNestedManyWithoutVideoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeCreateNestedManyWithoutVideoInput_1.LikeCreateNestedManyWithoutVideoInput)
], VideoCreateWithoutAuthorInput.prototype, "likes", void 0);
exports.VideoCreateWithoutAuthorInput = VideoCreateWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VideoCreateWithoutAuthorInput", {})
], VideoCreateWithoutAuthorInput);
