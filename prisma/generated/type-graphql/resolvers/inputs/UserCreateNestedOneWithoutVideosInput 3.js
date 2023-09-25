"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutVideosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutVideosInput_1 = require("../inputs/UserCreateOrConnectWithoutVideosInput");
const UserCreateWithoutVideosInput_1 = require("../inputs/UserCreateWithoutVideosInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutVideosInput = exports.UserCreateNestedOneWithoutVideosInput = class UserCreateNestedOneWithoutVideosInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutVideosInput_1.UserCreateWithoutVideosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutVideosInput_1.UserCreateWithoutVideosInput)
], UserCreateNestedOneWithoutVideosInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutVideosInput_1.UserCreateOrConnectWithoutVideosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutVideosInput_1.UserCreateOrConnectWithoutVideosInput)
], UserCreateNestedOneWithoutVideosInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutVideosInput.prototype, "connect", void 0);
exports.UserCreateNestedOneWithoutVideosInput = UserCreateNestedOneWithoutVideosInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutVideosInput", {})
], UserCreateNestedOneWithoutVideosInput);
