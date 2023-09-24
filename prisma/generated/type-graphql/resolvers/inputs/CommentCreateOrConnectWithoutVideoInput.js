"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCreateOrConnectWithoutVideoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateWithoutVideoInput_1 = require("../inputs/CommentCreateWithoutVideoInput");
const CommentWhereUniqueInput_1 = require("../inputs/CommentWhereUniqueInput");
let CommentCreateOrConnectWithoutVideoInput = exports.CommentCreateOrConnectWithoutVideoInput = class CommentCreateOrConnectWithoutVideoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentWhereUniqueInput_1.CommentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentWhereUniqueInput_1.CommentWhereUniqueInput)
], CommentCreateOrConnectWithoutVideoInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateWithoutVideoInput_1.CommentCreateWithoutVideoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentCreateWithoutVideoInput_1.CommentCreateWithoutVideoInput)
], CommentCreateOrConnectWithoutVideoInput.prototype, "create", void 0);
exports.CommentCreateOrConnectWithoutVideoInput = CommentCreateOrConnectWithoutVideoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentCreateOrConnectWithoutVideoInput", {})
], CommentCreateOrConnectWithoutVideoInput);
