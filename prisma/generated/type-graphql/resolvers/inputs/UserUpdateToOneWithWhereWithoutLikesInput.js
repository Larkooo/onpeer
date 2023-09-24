"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateToOneWithWhereWithoutLikesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUpdateWithoutLikesInput_1 = require("../inputs/UserUpdateWithoutLikesInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpdateToOneWithWhereWithoutLikesInput = exports.UserUpdateToOneWithWhereWithoutLikesInput = class UserUpdateToOneWithWhereWithoutLikesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpdateToOneWithWhereWithoutLikesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutLikesInput_1.UserUpdateWithoutLikesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutLikesInput_1.UserUpdateWithoutLikesInput)
], UserUpdateToOneWithWhereWithoutLikesInput.prototype, "data", void 0);
exports.UserUpdateToOneWithWhereWithoutLikesInput = UserUpdateToOneWithWhereWithoutLikesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutLikesInput", {})
], UserUpdateToOneWithWhereWithoutLikesInput);
