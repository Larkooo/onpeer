"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutVideosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateNestedManyWithoutUserInput_1 = require("../inputs/CommentCreateNestedManyWithoutUserInput");
const LikeCreateNestedManyWithoutUserInput_1 = require("../inputs/LikeCreateNestedManyWithoutUserInput");
let UserCreateWithoutVideosInput = exports.UserCreateWithoutVideosInput = class UserCreateWithoutVideosInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutVideosInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutUserInput_1.CommentCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateNestedManyWithoutUserInput_1.CommentCreateNestedManyWithoutUserInput)
], UserCreateWithoutVideosInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeCreateNestedManyWithoutUserInput_1.LikeCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeCreateNestedManyWithoutUserInput_1.LikeCreateNestedManyWithoutUserInput)
], UserCreateWithoutVideosInput.prototype, "likes", void 0);
exports.UserCreateWithoutVideosInput = UserCreateWithoutVideosInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutVideosInput", {})
], UserCreateWithoutVideosInput);
