"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCreateNestedManyWithoutVideoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateManyVideoInputEnvelope_1 = require("../inputs/CommentCreateManyVideoInputEnvelope");
const CommentCreateOrConnectWithoutVideoInput_1 = require("../inputs/CommentCreateOrConnectWithoutVideoInput");
const CommentCreateWithoutVideoInput_1 = require("../inputs/CommentCreateWithoutVideoInput");
const CommentWhereUniqueInput_1 = require("../inputs/CommentWhereUniqueInput");
let CommentCreateNestedManyWithoutVideoInput = exports.CommentCreateNestedManyWithoutVideoInput = class CommentCreateNestedManyWithoutVideoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentCreateWithoutVideoInput_1.CommentCreateWithoutVideoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentCreateNestedManyWithoutVideoInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutVideoInput_1.CommentCreateOrConnectWithoutVideoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentCreateNestedManyWithoutVideoInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateManyVideoInputEnvelope_1.CommentCreateManyVideoInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateManyVideoInputEnvelope_1.CommentCreateManyVideoInputEnvelope)
], CommentCreateNestedManyWithoutVideoInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereUniqueInput_1.CommentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentCreateNestedManyWithoutVideoInput.prototype, "connect", void 0);
exports.CommentCreateNestedManyWithoutVideoInput = CommentCreateNestedManyWithoutVideoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentCreateNestedManyWithoutVideoInput", {})
], CommentCreateNestedManyWithoutVideoInput);
