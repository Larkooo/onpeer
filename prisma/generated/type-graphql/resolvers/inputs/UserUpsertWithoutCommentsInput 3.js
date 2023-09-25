"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutCommentsInput_1 = require("../inputs/UserCreateWithoutCommentsInput");
const UserUpdateWithoutCommentsInput_1 = require("../inputs/UserUpdateWithoutCommentsInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpsertWithoutCommentsInput = exports.UserUpsertWithoutCommentsInput = class UserUpsertWithoutCommentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutCommentsInput_1.UserUpdateWithoutCommentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutCommentsInput_1.UserUpdateWithoutCommentsInput)
], UserUpsertWithoutCommentsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutCommentsInput_1.UserCreateWithoutCommentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutCommentsInput_1.UserCreateWithoutCommentsInput)
], UserUpsertWithoutCommentsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpsertWithoutCommentsInput.prototype, "where", void 0);
exports.UserUpsertWithoutCommentsInput = UserUpsertWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutCommentsInput", {})
], UserUpsertWithoutCommentsInput);
