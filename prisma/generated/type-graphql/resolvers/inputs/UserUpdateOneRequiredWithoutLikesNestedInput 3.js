"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutLikesNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutLikesInput_1 = require("../inputs/UserCreateOrConnectWithoutLikesInput");
const UserCreateWithoutLikesInput_1 = require("../inputs/UserCreateWithoutLikesInput");
const UserUpdateToOneWithWhereWithoutLikesInput_1 = require("../inputs/UserUpdateToOneWithWhereWithoutLikesInput");
const UserUpsertWithoutLikesInput_1 = require("../inputs/UserUpsertWithoutLikesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutLikesNestedInput = exports.UserUpdateOneRequiredWithoutLikesNestedInput = class UserUpdateOneRequiredWithoutLikesNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutLikesInput_1.UserCreateWithoutLikesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutLikesInput_1.UserCreateWithoutLikesInput)
], UserUpdateOneRequiredWithoutLikesNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutLikesInput_1.UserCreateOrConnectWithoutLikesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutLikesInput_1.UserCreateOrConnectWithoutLikesInput)
], UserUpdateOneRequiredWithoutLikesNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutLikesInput_1.UserUpsertWithoutLikesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutLikesInput_1.UserUpsertWithoutLikesInput)
], UserUpdateOneRequiredWithoutLikesNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutLikesNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutLikesInput_1.UserUpdateToOneWithWhereWithoutLikesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateToOneWithWhereWithoutLikesInput_1.UserUpdateToOneWithWhereWithoutLikesInput)
], UserUpdateOneRequiredWithoutLikesNestedInput.prototype, "update", void 0);
exports.UserUpdateOneRequiredWithoutLikesNestedInput = UserUpdateOneRequiredWithoutLikesNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutLikesNestedInput", {})
], UserUpdateOneRequiredWithoutLikesNestedInput);
