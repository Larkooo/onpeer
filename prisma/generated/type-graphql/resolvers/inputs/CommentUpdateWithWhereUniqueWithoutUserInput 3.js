"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentUpdateWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentUpdateWithoutUserInput_1 = require("../inputs/CommentUpdateWithoutUserInput");
const CommentWhereUniqueInput_1 = require("../inputs/CommentWhereUniqueInput");
let CommentUpdateWithWhereUniqueWithoutUserInput = exports.CommentUpdateWithWhereUniqueWithoutUserInput = class CommentUpdateWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentWhereUniqueInput_1.CommentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentWhereUniqueInput_1.CommentWhereUniqueInput)
], CommentUpdateWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateWithoutUserInput_1.CommentUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentUpdateWithoutUserInput_1.CommentUpdateWithoutUserInput)
], CommentUpdateWithWhereUniqueWithoutUserInput.prototype, "data", void 0);
exports.CommentUpdateWithWhereUniqueWithoutUserInput = CommentUpdateWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentUpdateWithWhereUniqueWithoutUserInput", {})
], CommentUpdateWithWhereUniqueWithoutUserInput);
