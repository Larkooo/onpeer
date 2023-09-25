"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let UserCreateManyInput = exports.UserCreateManyInput = class UserCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateManyInput.prototype, "id", void 0);
exports.UserCreateManyInput = UserCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateManyInput", {})
], UserCreateManyInput);
