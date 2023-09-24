"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentUpdateManyWithoutUserNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateManyUserInputEnvelope_1 = require("../inputs/CommentCreateManyUserInputEnvelope");
const CommentCreateOrConnectWithoutUserInput_1 = require("../inputs/CommentCreateOrConnectWithoutUserInput");
const CommentCreateWithoutUserInput_1 = require("../inputs/CommentCreateWithoutUserInput");
const CommentScalarWhereInput_1 = require("../inputs/CommentScalarWhereInput");
const CommentUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/CommentUpdateManyWithWhereWithoutUserInput");
const CommentUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/CommentUpdateWithWhereUniqueWithoutUserInput");
const CommentUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/CommentUpsertWithWhereUniqueWithoutUserInput");
const CommentWhereUniqueInput_1 = require("../inputs/CommentWhereUniqueInput");
let CommentUpdateManyWithoutUserNestedInput = exports.CommentUpdateManyWithoutUserNestedInput = class CommentUpdateManyWithoutUserNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentCreateWithoutUserInput_1.CommentCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutUserNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutUserInput_1.CommentCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutUserNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentUpsertWithWhereUniqueWithoutUserInput_1.CommentUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutUserNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateManyUserInputEnvelope_1.CommentCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateManyUserInputEnvelope_1.CommentCreateManyUserInputEnvelope)
], CommentUpdateManyWithoutUserNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereUniqueInput_1.CommentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutUserNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereUniqueInput_1.CommentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutUserNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereUniqueInput_1.CommentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutUserNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereUniqueInput_1.CommentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutUserNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentUpdateWithWhereUniqueWithoutUserInput_1.CommentUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutUserNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentUpdateManyWithWhereWithoutUserInput_1.CommentUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutUserNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentScalarWhereInput_1.CommentScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutUserNestedInput.prototype, "deleteMany", void 0);
exports.CommentUpdateManyWithoutUserNestedInput = CommentUpdateManyWithoutUserNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentUpdateManyWithoutUserNestedInput", {})
], CommentUpdateManyWithoutUserNestedInput);
