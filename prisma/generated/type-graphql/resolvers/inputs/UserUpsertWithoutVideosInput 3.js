"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutVideosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutVideosInput_1 = require("../inputs/UserCreateWithoutVideosInput");
const UserUpdateWithoutVideosInput_1 = require("../inputs/UserUpdateWithoutVideosInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpsertWithoutVideosInput = exports.UserUpsertWithoutVideosInput = class UserUpsertWithoutVideosInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutVideosInput_1.UserUpdateWithoutVideosInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutVideosInput_1.UserUpdateWithoutVideosInput)
], UserUpsertWithoutVideosInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutVideosInput_1.UserCreateWithoutVideosInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutVideosInput_1.UserCreateWithoutVideosInput)
], UserUpsertWithoutVideosInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpsertWithoutVideosInput.prototype, "where", void 0);
exports.UserUpsertWithoutVideosInput = UserUpsertWithoutVideosInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutVideosInput", {})
], UserUpsertWithoutVideosInput);
