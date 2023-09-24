"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutLikesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutLikesInput_1 = require("../inputs/UserCreateOrConnectWithoutLikesInput");
const UserCreateWithoutLikesInput_1 = require("../inputs/UserCreateWithoutLikesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutLikesInput = exports.UserCreateNestedOneWithoutLikesInput = class UserCreateNestedOneWithoutLikesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutLikesInput_1.UserCreateWithoutLikesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutLikesInput_1.UserCreateWithoutLikesInput)
], UserCreateNestedOneWithoutLikesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutLikesInput_1.UserCreateOrConnectWithoutLikesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutLikesInput_1.UserCreateOrConnectWithoutLikesInput)
], UserCreateNestedOneWithoutLikesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutLikesInput.prototype, "connect", void 0);
exports.UserCreateNestedOneWithoutLikesInput = UserCreateNestedOneWithoutLikesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutLikesInput", {})
], UserCreateNestedOneWithoutLikesInput);
