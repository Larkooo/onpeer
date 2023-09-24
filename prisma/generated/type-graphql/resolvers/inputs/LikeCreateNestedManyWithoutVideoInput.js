"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeCreateNestedManyWithoutVideoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LikeCreateManyVideoInputEnvelope_1 = require("../inputs/LikeCreateManyVideoInputEnvelope");
const LikeCreateOrConnectWithoutVideoInput_1 = require("../inputs/LikeCreateOrConnectWithoutVideoInput");
const LikeCreateWithoutVideoInput_1 = require("../inputs/LikeCreateWithoutVideoInput");
const LikeWhereUniqueInput_1 = require("../inputs/LikeWhereUniqueInput");
let LikeCreateNestedManyWithoutVideoInput = exports.LikeCreateNestedManyWithoutVideoInput = class LikeCreateNestedManyWithoutVideoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeCreateWithoutVideoInput_1.LikeCreateWithoutVideoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeCreateNestedManyWithoutVideoInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeCreateOrConnectWithoutVideoInput_1.LikeCreateOrConnectWithoutVideoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeCreateNestedManyWithoutVideoInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeCreateManyVideoInputEnvelope_1.LikeCreateManyVideoInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeCreateManyVideoInputEnvelope_1.LikeCreateManyVideoInputEnvelope)
], LikeCreateNestedManyWithoutVideoInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeWhereUniqueInput_1.LikeWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeCreateNestedManyWithoutVideoInput.prototype, "connect", void 0);
exports.LikeCreateNestedManyWithoutVideoInput = LikeCreateNestedManyWithoutVideoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LikeCreateNestedManyWithoutVideoInput", {})
], LikeCreateNestedManyWithoutVideoInput);
