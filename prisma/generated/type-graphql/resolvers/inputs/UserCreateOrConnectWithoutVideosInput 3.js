"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutVideosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutVideosInput_1 = require("../inputs/UserCreateWithoutVideosInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutVideosInput = exports.UserCreateOrConnectWithoutVideosInput = class UserCreateOrConnectWithoutVideosInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutVideosInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutVideosInput_1.UserCreateWithoutVideosInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutVideosInput_1.UserCreateWithoutVideosInput)
], UserCreateOrConnectWithoutVideosInput.prototype, "create", void 0);
exports.UserCreateOrConnectWithoutVideosInput = UserCreateOrConnectWithoutVideosInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutVideosInput", {})
], UserCreateOrConnectWithoutVideosInput);
