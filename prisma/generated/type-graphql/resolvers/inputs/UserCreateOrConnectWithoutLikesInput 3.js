"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutLikesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutLikesInput_1 = require("../inputs/UserCreateWithoutLikesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutLikesInput = exports.UserCreateOrConnectWithoutLikesInput = class UserCreateOrConnectWithoutLikesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutLikesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutLikesInput_1.UserCreateWithoutLikesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutLikesInput_1.UserCreateWithoutLikesInput)
], UserCreateOrConnectWithoutLikesInput.prototype, "create", void 0);
exports.UserCreateOrConnectWithoutLikesInput = UserCreateOrConnectWithoutLikesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutLikesInput", {})
], UserCreateOrConnectWithoutLikesInput);
