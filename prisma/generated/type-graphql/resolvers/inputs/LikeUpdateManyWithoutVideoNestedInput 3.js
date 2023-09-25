"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeUpdateManyWithoutVideoNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LikeCreateManyVideoInputEnvelope_1 = require("../inputs/LikeCreateManyVideoInputEnvelope");
const LikeCreateOrConnectWithoutVideoInput_1 = require("../inputs/LikeCreateOrConnectWithoutVideoInput");
const LikeCreateWithoutVideoInput_1 = require("../inputs/LikeCreateWithoutVideoInput");
const LikeScalarWhereInput_1 = require("../inputs/LikeScalarWhereInput");
const LikeUpdateManyWithWhereWithoutVideoInput_1 = require("../inputs/LikeUpdateManyWithWhereWithoutVideoInput");
const LikeUpdateWithWhereUniqueWithoutVideoInput_1 = require("../inputs/LikeUpdateWithWhereUniqueWithoutVideoInput");
const LikeUpsertWithWhereUniqueWithoutVideoInput_1 = require("../inputs/LikeUpsertWithWhereUniqueWithoutVideoInput");
const LikeWhereUniqueInput_1 = require("../inputs/LikeWhereUniqueInput");
let LikeUpdateManyWithoutVideoNestedInput = exports.LikeUpdateManyWithoutVideoNestedInput = class LikeUpdateManyWithoutVideoNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeCreateWithoutVideoInput_1.LikeCreateWithoutVideoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeUpdateManyWithoutVideoNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeCreateOrConnectWithoutVideoInput_1.LikeCreateOrConnectWithoutVideoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeUpdateManyWithoutVideoNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeUpsertWithWhereUniqueWithoutVideoInput_1.LikeUpsertWithWhereUniqueWithoutVideoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeUpdateManyWithoutVideoNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeCreateManyVideoInputEnvelope_1.LikeCreateManyVideoInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeCreateManyVideoInputEnvelope_1.LikeCreateManyVideoInputEnvelope)
], LikeUpdateManyWithoutVideoNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeWhereUniqueInput_1.LikeWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeUpdateManyWithoutVideoNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeWhereUniqueInput_1.LikeWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeUpdateManyWithoutVideoNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeWhereUniqueInput_1.LikeWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeUpdateManyWithoutVideoNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeWhereUniqueInput_1.LikeWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeUpdateManyWithoutVideoNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeUpdateWithWhereUniqueWithoutVideoInput_1.LikeUpdateWithWhereUniqueWithoutVideoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeUpdateManyWithoutVideoNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeUpdateManyWithWhereWithoutVideoInput_1.LikeUpdateManyWithWhereWithoutVideoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeUpdateManyWithoutVideoNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeScalarWhereInput_1.LikeScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeUpdateManyWithoutVideoNestedInput.prototype, "deleteMany", void 0);
exports.LikeUpdateManyWithoutVideoNestedInput = LikeUpdateManyWithoutVideoNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LikeUpdateManyWithoutVideoNestedInput", {})
], LikeUpdateManyWithoutVideoNestedInput);
