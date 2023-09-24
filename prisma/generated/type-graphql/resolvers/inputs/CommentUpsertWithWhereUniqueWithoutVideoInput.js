"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentUpsertWithWhereUniqueWithoutVideoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateWithoutVideoInput_1 = require("../inputs/CommentCreateWithoutVideoInput");
const CommentUpdateWithoutVideoInput_1 = require("../inputs/CommentUpdateWithoutVideoInput");
const CommentWhereUniqueInput_1 = require("../inputs/CommentWhereUniqueInput");
let CommentUpsertWithWhereUniqueWithoutVideoInput = exports.CommentUpsertWithWhereUniqueWithoutVideoInput = class CommentUpsertWithWhereUniqueWithoutVideoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentWhereUniqueInput_1.CommentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentWhereUniqueInput_1.CommentWhereUniqueInput)
], CommentUpsertWithWhereUniqueWithoutVideoInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateWithoutVideoInput_1.CommentUpdateWithoutVideoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentUpdateWithoutVideoInput_1.CommentUpdateWithoutVideoInput)
], CommentUpsertWithWhereUniqueWithoutVideoInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateWithoutVideoInput_1.CommentCreateWithoutVideoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentCreateWithoutVideoInput_1.CommentCreateWithoutVideoInput)
], CommentUpsertWithWhereUniqueWithoutVideoInput.prototype, "create", void 0);
exports.CommentUpsertWithWhereUniqueWithoutVideoInput = CommentUpsertWithWhereUniqueWithoutVideoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentUpsertWithWhereUniqueWithoutVideoInput", {})
], CommentUpsertWithWhereUniqueWithoutVideoInput);
