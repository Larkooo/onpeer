"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentUpsertWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateWithoutUserInput_1 = require("../inputs/CommentCreateWithoutUserInput");
const CommentUpdateWithoutUserInput_1 = require("../inputs/CommentUpdateWithoutUserInput");
const CommentWhereUniqueInput_1 = require("../inputs/CommentWhereUniqueInput");
let CommentUpsertWithWhereUniqueWithoutUserInput = exports.CommentUpsertWithWhereUniqueWithoutUserInput = class CommentUpsertWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentWhereUniqueInput_1.CommentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentWhereUniqueInput_1.CommentWhereUniqueInput)
], CommentUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateWithoutUserInput_1.CommentUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentUpdateWithoutUserInput_1.CommentUpdateWithoutUserInput)
], CommentUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateWithoutUserInput_1.CommentCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentCreateWithoutUserInput_1.CommentCreateWithoutUserInput)
], CommentUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
exports.CommentUpsertWithWhereUniqueWithoutUserInput = CommentUpsertWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentUpsertWithWhereUniqueWithoutUserInput", {})
], CommentUpsertWithWhereUniqueWithoutUserInput);
