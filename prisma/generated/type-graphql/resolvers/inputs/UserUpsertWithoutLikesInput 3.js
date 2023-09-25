"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutLikesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutLikesInput_1 = require("../inputs/UserCreateWithoutLikesInput");
const UserUpdateWithoutLikesInput_1 = require("../inputs/UserUpdateWithoutLikesInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpsertWithoutLikesInput = exports.UserUpsertWithoutLikesInput = class UserUpsertWithoutLikesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutLikesInput_1.UserUpdateWithoutLikesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutLikesInput_1.UserUpdateWithoutLikesInput)
], UserUpsertWithoutLikesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutLikesInput_1.UserCreateWithoutLikesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutLikesInput_1.UserCreateWithoutLikesInput)
], UserUpsertWithoutLikesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpsertWithoutLikesInput.prototype, "where", void 0);
exports.UserUpsertWithoutLikesInput = UserUpsertWithoutLikesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutLikesInput", {})
], UserUpsertWithoutLikesInput);
