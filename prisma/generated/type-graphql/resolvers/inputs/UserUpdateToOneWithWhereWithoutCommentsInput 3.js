"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateToOneWithWhereWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUpdateWithoutCommentsInput_1 = require("../inputs/UserUpdateWithoutCommentsInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpdateToOneWithWhereWithoutCommentsInput = exports.UserUpdateToOneWithWhereWithoutCommentsInput = class UserUpdateToOneWithWhereWithoutCommentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpdateToOneWithWhereWithoutCommentsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutCommentsInput_1.UserUpdateWithoutCommentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutCommentsInput_1.UserUpdateWithoutCommentsInput)
], UserUpdateToOneWithWhereWithoutCommentsInput.prototype, "data", void 0);
exports.UserUpdateToOneWithWhereWithoutCommentsInput = UserUpdateToOneWithWhereWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutCommentsInput", {})
], UserUpdateToOneWithWhereWithoutCommentsInput);
