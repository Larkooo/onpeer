"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCreateNestedManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateManyUserInputEnvelope_1 = require("../inputs/CommentCreateManyUserInputEnvelope");
const CommentCreateOrConnectWithoutUserInput_1 = require("../inputs/CommentCreateOrConnectWithoutUserInput");
const CommentCreateWithoutUserInput_1 = require("../inputs/CommentCreateWithoutUserInput");
const CommentWhereUniqueInput_1 = require("../inputs/CommentWhereUniqueInput");
let CommentCreateNestedManyWithoutUserInput = exports.CommentCreateNestedManyWithoutUserInput = class CommentCreateNestedManyWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentCreateWithoutUserInput_1.CommentCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentCreateNestedManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutUserInput_1.CommentCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateManyUserInputEnvelope_1.CommentCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateManyUserInputEnvelope_1.CommentCreateManyUserInputEnvelope)
], CommentCreateNestedManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereUniqueInput_1.CommentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
exports.CommentCreateNestedManyWithoutUserInput = CommentCreateNestedManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentCreateNestedManyWithoutUserInput", {})
], CommentCreateNestedManyWithoutUserInput);
