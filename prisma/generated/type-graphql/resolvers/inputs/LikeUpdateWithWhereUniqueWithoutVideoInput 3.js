"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeUpdateWithWhereUniqueWithoutVideoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LikeUpdateWithoutVideoInput_1 = require("../inputs/LikeUpdateWithoutVideoInput");
const LikeWhereUniqueInput_1 = require("../inputs/LikeWhereUniqueInput");
let LikeUpdateWithWhereUniqueWithoutVideoInput = exports.LikeUpdateWithWhereUniqueWithoutVideoInput = class LikeUpdateWithWhereUniqueWithoutVideoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeWhereUniqueInput_1.LikeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LikeWhereUniqueInput_1.LikeWhereUniqueInput)
], LikeUpdateWithWhereUniqueWithoutVideoInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeUpdateWithoutVideoInput_1.LikeUpdateWithoutVideoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LikeUpdateWithoutVideoInput_1.LikeUpdateWithoutVideoInput)
], LikeUpdateWithWhereUniqueWithoutVideoInput.prototype, "data", void 0);
exports.LikeUpdateWithWhereUniqueWithoutVideoInput = LikeUpdateWithWhereUniqueWithoutVideoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LikeUpdateWithWhereUniqueWithoutVideoInput", {})
], LikeUpdateWithWhereUniqueWithoutVideoInput);
