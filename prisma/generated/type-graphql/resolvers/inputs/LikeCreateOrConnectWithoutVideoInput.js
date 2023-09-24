"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeCreateOrConnectWithoutVideoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LikeCreateWithoutVideoInput_1 = require("../inputs/LikeCreateWithoutVideoInput");
const LikeWhereUniqueInput_1 = require("../inputs/LikeWhereUniqueInput");
let LikeCreateOrConnectWithoutVideoInput = exports.LikeCreateOrConnectWithoutVideoInput = class LikeCreateOrConnectWithoutVideoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeWhereUniqueInput_1.LikeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LikeWhereUniqueInput_1.LikeWhereUniqueInput)
], LikeCreateOrConnectWithoutVideoInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeCreateWithoutVideoInput_1.LikeCreateWithoutVideoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LikeCreateWithoutVideoInput_1.LikeCreateWithoutVideoInput)
], LikeCreateOrConnectWithoutVideoInput.prototype, "create", void 0);
exports.LikeCreateOrConnectWithoutVideoInput = LikeCreateOrConnectWithoutVideoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LikeCreateOrConnectWithoutVideoInput", {})
], LikeCreateOrConnectWithoutVideoInput);
