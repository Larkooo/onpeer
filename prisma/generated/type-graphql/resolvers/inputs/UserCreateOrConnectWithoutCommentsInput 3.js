"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutCommentsInput_1 = require("../inputs/UserCreateWithoutCommentsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutCommentsInput = exports.UserCreateOrConnectWithoutCommentsInput = class UserCreateOrConnectWithoutCommentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutCommentsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutCommentsInput_1.UserCreateWithoutCommentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutCommentsInput_1.UserCreateWithoutCommentsInput)
], UserCreateOrConnectWithoutCommentsInput.prototype, "create", void 0);
exports.UserCreateOrConnectWithoutCommentsInput = UserCreateOrConnectWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutCommentsInput", {})
], UserCreateOrConnectWithoutCommentsInput);
