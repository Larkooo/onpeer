"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateWithoutUserInput_1 = require("../inputs/CommentCreateWithoutUserInput");
const CommentWhereUniqueInput_1 = require("../inputs/CommentWhereUniqueInput");
let CommentCreateOrConnectWithoutUserInput = exports.CommentCreateOrConnectWithoutUserInput = class CommentCreateOrConnectWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentWhereUniqueInput_1.CommentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentWhereUniqueInput_1.CommentWhereUniqueInput)
], CommentCreateOrConnectWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateWithoutUserInput_1.CommentCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentCreateWithoutUserInput_1.CommentCreateWithoutUserInput)
], CommentCreateOrConnectWithoutUserInput.prototype, "create", void 0);
exports.CommentCreateOrConnectWithoutUserInput = CommentCreateOrConnectWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentCreateOrConnectWithoutUserInput", {})
], CommentCreateOrConnectWithoutUserInput);
