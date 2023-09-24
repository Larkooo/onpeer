"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeUpdateManyWithoutUserNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LikeCreateManyUserInputEnvelope_1 = require("../inputs/LikeCreateManyUserInputEnvelope");
const LikeCreateOrConnectWithoutUserInput_1 = require("../inputs/LikeCreateOrConnectWithoutUserInput");
const LikeCreateWithoutUserInput_1 = require("../inputs/LikeCreateWithoutUserInput");
const LikeScalarWhereInput_1 = require("../inputs/LikeScalarWhereInput");
const LikeUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/LikeUpdateManyWithWhereWithoutUserInput");
const LikeUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/LikeUpdateWithWhereUniqueWithoutUserInput");
const LikeUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/LikeUpsertWithWhereUniqueWithoutUserInput");
const LikeWhereUniqueInput_1 = require("../inputs/LikeWhereUniqueInput");
let LikeUpdateManyWithoutUserNestedInput = exports.LikeUpdateManyWithoutUserNestedInput = class LikeUpdateManyWithoutUserNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeCreateWithoutUserInput_1.LikeCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeUpdateManyWithoutUserNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeCreateOrConnectWithoutUserInput_1.LikeCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeUpdateManyWithoutUserNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeUpsertWithWhereUniqueWithoutUserInput_1.LikeUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeUpdateManyWithoutUserNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeCreateManyUserInputEnvelope_1.LikeCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeCreateManyUserInputEnvelope_1.LikeCreateManyUserInputEnvelope)
], LikeUpdateManyWithoutUserNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeWhereUniqueInput_1.LikeWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeUpdateManyWithoutUserNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeWhereUniqueInput_1.LikeWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeUpdateManyWithoutUserNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeWhereUniqueInput_1.LikeWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeUpdateManyWithoutUserNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeWhereUniqueInput_1.LikeWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeUpdateManyWithoutUserNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeUpdateWithWhereUniqueWithoutUserInput_1.LikeUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeUpdateManyWithoutUserNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeUpdateManyWithWhereWithoutUserInput_1.LikeUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeUpdateManyWithoutUserNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeScalarWhereInput_1.LikeScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeUpdateManyWithoutUserNestedInput.prototype, "deleteMany", void 0);
exports.LikeUpdateManyWithoutUserNestedInput = LikeUpdateManyWithoutUserNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LikeUpdateManyWithoutUserNestedInput", {})
], LikeUpdateManyWithoutUserNestedInput);
