"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeUpsertWithWhereUniqueWithoutVideoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LikeCreateWithoutVideoInput_1 = require("../inputs/LikeCreateWithoutVideoInput");
const LikeUpdateWithoutVideoInput_1 = require("../inputs/LikeUpdateWithoutVideoInput");
const LikeWhereUniqueInput_1 = require("../inputs/LikeWhereUniqueInput");
let LikeUpsertWithWhereUniqueWithoutVideoInput = exports.LikeUpsertWithWhereUniqueWithoutVideoInput = class LikeUpsertWithWhereUniqueWithoutVideoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeWhereUniqueInput_1.LikeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LikeWhereUniqueInput_1.LikeWhereUniqueInput)
], LikeUpsertWithWhereUniqueWithoutVideoInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeUpdateWithoutVideoInput_1.LikeUpdateWithoutVideoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LikeUpdateWithoutVideoInput_1.LikeUpdateWithoutVideoInput)
], LikeUpsertWithWhereUniqueWithoutVideoInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeCreateWithoutVideoInput_1.LikeCreateWithoutVideoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LikeCreateWithoutVideoInput_1.LikeCreateWithoutVideoInput)
], LikeUpsertWithWhereUniqueWithoutVideoInput.prototype, "create", void 0);
exports.LikeUpsertWithWhereUniqueWithoutVideoInput = LikeUpsertWithWhereUniqueWithoutVideoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LikeUpsertWithWhereUniqueWithoutVideoInput", {})
], LikeUpsertWithWhereUniqueWithoutVideoInput);
