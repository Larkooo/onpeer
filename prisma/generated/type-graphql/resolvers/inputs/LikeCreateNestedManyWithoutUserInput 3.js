"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeCreateNestedManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LikeCreateManyUserInputEnvelope_1 = require("../inputs/LikeCreateManyUserInputEnvelope");
const LikeCreateOrConnectWithoutUserInput_1 = require("../inputs/LikeCreateOrConnectWithoutUserInput");
const LikeCreateWithoutUserInput_1 = require("../inputs/LikeCreateWithoutUserInput");
const LikeWhereUniqueInput_1 = require("../inputs/LikeWhereUniqueInput");
let LikeCreateNestedManyWithoutUserInput = exports.LikeCreateNestedManyWithoutUserInput = class LikeCreateNestedManyWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeCreateWithoutUserInput_1.LikeCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeCreateNestedManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeCreateOrConnectWithoutUserInput_1.LikeCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeCreateManyUserInputEnvelope_1.LikeCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeCreateManyUserInputEnvelope_1.LikeCreateManyUserInputEnvelope)
], LikeCreateNestedManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeWhereUniqueInput_1.LikeWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
exports.LikeCreateNestedManyWithoutUserInput = LikeCreateNestedManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LikeCreateNestedManyWithoutUserInput", {})
], LikeCreateNestedManyWithoutUserInput);
