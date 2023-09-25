"use strict";
var LikeScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFilter_1 = require("../inputs/StringFilter");
let LikeScalarWhereInput = exports.LikeScalarWhereInput = LikeScalarWhereInput_1 = class LikeScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], LikeScalarWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], LikeScalarWhereInput.prototype, "videoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], LikeScalarWhereInput.prototype, "tx", void 0);
exports.LikeScalarWhereInput = LikeScalarWhereInput = LikeScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("LikeScalarWhereInput", {})
], LikeScalarWhereInput);
