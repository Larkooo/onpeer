"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutVideosNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutVideosInput_1 = require("../inputs/UserCreateOrConnectWithoutVideosInput");
const UserCreateWithoutVideosInput_1 = require("../inputs/UserCreateWithoutVideosInput");
const UserUpdateToOneWithWhereWithoutVideosInput_1 = require("../inputs/UserUpdateToOneWithWhereWithoutVideosInput");
const UserUpsertWithoutVideosInput_1 = require("../inputs/UserUpsertWithoutVideosInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutVideosNestedInput = exports.UserUpdateOneRequiredWithoutVideosNestedInput = class UserUpdateOneRequiredWithoutVideosNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutVideosInput_1.UserCreateWithoutVideosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutVideosInput_1.UserCreateWithoutVideosInput)
], UserUpdateOneRequiredWithoutVideosNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutVideosInput_1.UserCreateOrConnectWithoutVideosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutVideosInput_1.UserCreateOrConnectWithoutVideosInput)
], UserUpdateOneRequiredWithoutVideosNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutVideosInput_1.UserUpsertWithoutVideosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutVideosInput_1.UserUpsertWithoutVideosInput)
], UserUpdateOneRequiredWithoutVideosNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutVideosNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutVideosInput_1.UserUpdateToOneWithWhereWithoutVideosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateToOneWithWhereWithoutVideosInput_1.UserUpdateToOneWithWhereWithoutVideosInput)
], UserUpdateOneRequiredWithoutVideosNestedInput.prototype, "update", void 0);
exports.UserUpdateOneRequiredWithoutVideosNestedInput = UserUpdateOneRequiredWithoutVideosNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutVideosNestedInput", {})
], UserUpdateOneRequiredWithoutVideosNestedInput);
