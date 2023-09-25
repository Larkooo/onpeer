"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeUpsertWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LikeCreateWithoutUserInput_1 = require("../inputs/LikeCreateWithoutUserInput");
const LikeUpdateWithoutUserInput_1 = require("../inputs/LikeUpdateWithoutUserInput");
const LikeWhereUniqueInput_1 = require("../inputs/LikeWhereUniqueInput");
let LikeUpsertWithWhereUniqueWithoutUserInput = exports.LikeUpsertWithWhereUniqueWithoutUserInput = class LikeUpsertWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeWhereUniqueInput_1.LikeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LikeWhereUniqueInput_1.LikeWhereUniqueInput)
], LikeUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeUpdateWithoutUserInput_1.LikeUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LikeUpdateWithoutUserInput_1.LikeUpdateWithoutUserInput)
], LikeUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeCreateWithoutUserInput_1.LikeCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LikeCreateWithoutUserInput_1.LikeCreateWithoutUserInput)
], LikeUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
exports.LikeUpsertWithWhereUniqueWithoutUserInput = LikeUpsertWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LikeUpsertWithWhereUniqueWithoutUserInput", {})
], LikeUpsertWithWhereUniqueWithoutUserInput);
