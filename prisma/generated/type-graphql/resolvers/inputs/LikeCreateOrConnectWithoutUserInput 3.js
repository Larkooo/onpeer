"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LikeCreateWithoutUserInput_1 = require("../inputs/LikeCreateWithoutUserInput");
const LikeWhereUniqueInput_1 = require("../inputs/LikeWhereUniqueInput");
let LikeCreateOrConnectWithoutUserInput = exports.LikeCreateOrConnectWithoutUserInput = class LikeCreateOrConnectWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeWhereUniqueInput_1.LikeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LikeWhereUniqueInput_1.LikeWhereUniqueInput)
], LikeCreateOrConnectWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeCreateWithoutUserInput_1.LikeCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LikeCreateWithoutUserInput_1.LikeCreateWithoutUserInput)
], LikeCreateOrConnectWithoutUserInput.prototype, "create", void 0);
exports.LikeCreateOrConnectWithoutUserInput = LikeCreateOrConnectWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LikeCreateOrConnectWithoutUserInput", {})
], LikeCreateOrConnectWithoutUserInput);
