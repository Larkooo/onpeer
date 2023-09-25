"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeCreateWithoutVideoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutLikesInput_1 = require("../inputs/UserCreateNestedOneWithoutLikesInput");
let LikeCreateWithoutVideoInput = exports.LikeCreateWithoutVideoInput = class LikeCreateWithoutVideoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LikeCreateWithoutVideoInput.prototype, "tx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutLikesInput_1.UserCreateNestedOneWithoutLikesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutLikesInput_1.UserCreateNestedOneWithoutLikesInput)
], LikeCreateWithoutVideoInput.prototype, "user", void 0);
exports.LikeCreateWithoutVideoInput = LikeCreateWithoutVideoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LikeCreateWithoutVideoInput", {})
], LikeCreateWithoutVideoInput);
