"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentUpdateManyWithoutVideoNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateManyVideoInputEnvelope_1 = require("../inputs/CommentCreateManyVideoInputEnvelope");
const CommentCreateOrConnectWithoutVideoInput_1 = require("../inputs/CommentCreateOrConnectWithoutVideoInput");
const CommentCreateWithoutVideoInput_1 = require("../inputs/CommentCreateWithoutVideoInput");
const CommentScalarWhereInput_1 = require("../inputs/CommentScalarWhereInput");
const CommentUpdateManyWithWhereWithoutVideoInput_1 = require("../inputs/CommentUpdateManyWithWhereWithoutVideoInput");
const CommentUpdateWithWhereUniqueWithoutVideoInput_1 = require("../inputs/CommentUpdateWithWhereUniqueWithoutVideoInput");
const CommentUpsertWithWhereUniqueWithoutVideoInput_1 = require("../inputs/CommentUpsertWithWhereUniqueWithoutVideoInput");
const CommentWhereUniqueInput_1 = require("../inputs/CommentWhereUniqueInput");
let CommentUpdateManyWithoutVideoNestedInput = exports.CommentUpdateManyWithoutVideoNestedInput = class CommentUpdateManyWithoutVideoNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentCreateWithoutVideoInput_1.CommentCreateWithoutVideoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutVideoNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutVideoInput_1.CommentCreateOrConnectWithoutVideoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutVideoNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentUpsertWithWhereUniqueWithoutVideoInput_1.CommentUpsertWithWhereUniqueWithoutVideoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutVideoNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateManyVideoInputEnvelope_1.CommentCreateManyVideoInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateManyVideoInputEnvelope_1.CommentCreateManyVideoInputEnvelope)
], CommentUpdateManyWithoutVideoNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereUniqueInput_1.CommentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutVideoNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereUniqueInput_1.CommentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutVideoNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereUniqueInput_1.CommentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutVideoNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereUniqueInput_1.CommentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutVideoNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentUpdateWithWhereUniqueWithoutVideoInput_1.CommentUpdateWithWhereUniqueWithoutVideoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutVideoNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentUpdateManyWithWhereWithoutVideoInput_1.CommentUpdateManyWithWhereWithoutVideoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutVideoNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentScalarWhereInput_1.CommentScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutVideoNestedInput.prototype, "deleteMany", void 0);
exports.CommentUpdateManyWithoutVideoNestedInput = CommentUpdateManyWithoutVideoNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentUpdateManyWithoutVideoNestedInput", {})
], CommentUpdateManyWithoutVideoNestedInput);
