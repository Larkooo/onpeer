"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeUpdateWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LikeUpdateWithoutUserInput_1 = require("../inputs/LikeUpdateWithoutUserInput");
const LikeWhereUniqueInput_1 = require("../inputs/LikeWhereUniqueInput");
let LikeUpdateWithWhereUniqueWithoutUserInput = exports.LikeUpdateWithWhereUniqueWithoutUserInput = class LikeUpdateWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeWhereUniqueInput_1.LikeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LikeWhereUniqueInput_1.LikeWhereUniqueInput)
], LikeUpdateWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeUpdateWithoutUserInput_1.LikeUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LikeUpdateWithoutUserInput_1.LikeUpdateWithoutUserInput)
], LikeUpdateWithWhereUniqueWithoutUserInput.prototype, "data", void 0);
exports.LikeUpdateWithWhereUniqueWithoutUserInput = LikeUpdateWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LikeUpdateWithWhereUniqueWithoutUserInput", {})
], LikeUpdateWithWhereUniqueWithoutUserInput);
