"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentUpdateWithWhereUniqueWithoutVideoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentUpdateWithoutVideoInput_1 = require("../inputs/CommentUpdateWithoutVideoInput");
const CommentWhereUniqueInput_1 = require("../inputs/CommentWhereUniqueInput");
let CommentUpdateWithWhereUniqueWithoutVideoInput = exports.CommentUpdateWithWhereUniqueWithoutVideoInput = class CommentUpdateWithWhereUniqueWithoutVideoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentWhereUniqueInput_1.CommentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentWhereUniqueInput_1.CommentWhereUniqueInput)
], CommentUpdateWithWhereUniqueWithoutVideoInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateWithoutVideoInput_1.CommentUpdateWithoutVideoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentUpdateWithoutVideoInput_1.CommentUpdateWithoutVideoInput)
], CommentUpdateWithWhereUniqueWithoutVideoInput.prototype, "data", void 0);
exports.CommentUpdateWithWhereUniqueWithoutVideoInput = CommentUpdateWithWhereUniqueWithoutVideoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentUpdateWithWhereUniqueWithoutVideoInput", {})
], CommentUpdateWithWhereUniqueWithoutVideoInput);
