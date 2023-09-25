"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateToOneWithWhereWithoutVideosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUpdateWithoutVideosInput_1 = require("../inputs/UserUpdateWithoutVideosInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpdateToOneWithWhereWithoutVideosInput = exports.UserUpdateToOneWithWhereWithoutVideosInput = class UserUpdateToOneWithWhereWithoutVideosInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpdateToOneWithWhereWithoutVideosInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutVideosInput_1.UserUpdateWithoutVideosInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutVideosInput_1.UserUpdateWithoutVideosInput)
], UserUpdateToOneWithWhereWithoutVideosInput.prototype, "data", void 0);
exports.UserUpdateToOneWithWhereWithoutVideosInput = UserUpdateToOneWithWhereWithoutVideosInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutVideosInput", {})
], UserUpdateToOneWithWhereWithoutVideosInput);
