"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutCommentsNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutCommentsInput_1 = require("../inputs/UserCreateOrConnectWithoutCommentsInput");
const UserCreateWithoutCommentsInput_1 = require("../inputs/UserCreateWithoutCommentsInput");
const UserUpdateToOneWithWhereWithoutCommentsInput_1 = require("../inputs/UserUpdateToOneWithWhereWithoutCommentsInput");
const UserUpsertWithoutCommentsInput_1 = require("../inputs/UserUpsertWithoutCommentsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutCommentsNestedInput = exports.UserUpdateOneRequiredWithoutCommentsNestedInput = class UserUpdateOneRequiredWithoutCommentsNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutCommentsInput_1.UserCreateWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutCommentsInput_1.UserCreateWithoutCommentsInput)
], UserUpdateOneRequiredWithoutCommentsNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCommentsInput_1.UserCreateOrConnectWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutCommentsInput_1.UserCreateOrConnectWithoutCommentsInput)
], UserUpdateOneRequiredWithoutCommentsNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutCommentsInput_1.UserUpsertWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutCommentsInput_1.UserUpsertWithoutCommentsInput)
], UserUpdateOneRequiredWithoutCommentsNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutCommentsNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutCommentsInput_1.UserUpdateToOneWithWhereWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateToOneWithWhereWithoutCommentsInput_1.UserUpdateToOneWithWhereWithoutCommentsInput)
], UserUpdateOneRequiredWithoutCommentsNestedInput.prototype, "update", void 0);
exports.UserUpdateOneRequiredWithoutCommentsNestedInput = UserUpdateOneRequiredWithoutCommentsNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutCommentsNestedInput", {})
], UserUpdateOneRequiredWithoutCommentsNestedInput);
