"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutCommentsInput_1 = require("../inputs/UserCreateOrConnectWithoutCommentsInput");
const UserCreateWithoutCommentsInput_1 = require("../inputs/UserCreateWithoutCommentsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutCommentsInput = exports.UserCreateNestedOneWithoutCommentsInput = class UserCreateNestedOneWithoutCommentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutCommentsInput_1.UserCreateWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutCommentsInput_1.UserCreateWithoutCommentsInput)
], UserCreateNestedOneWithoutCommentsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCommentsInput_1.UserCreateOrConnectWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutCommentsInput_1.UserCreateOrConnectWithoutCommentsInput)
], UserCreateNestedOneWithoutCommentsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutCommentsInput.prototype, "connect", void 0);
exports.UserCreateNestedOneWithoutCommentsInput = UserCreateNestedOneWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutCommentsInput", {})
], UserCreateNestedOneWithoutCommentsInput);
