"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateNestedManyWithoutUserInput_1 = require("../inputs/CommentCreateNestedManyWithoutUserInput");
const LikeCreateNestedManyWithoutUserInput_1 = require("../inputs/LikeCreateNestedManyWithoutUserInput");
const VideoCreateNestedManyWithoutAuthorInput_1 = require("../inputs/VideoCreateNestedManyWithoutAuthorInput");
let UserCreateInput = exports.UserCreateInput = class UserCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoCreateNestedManyWithoutAuthorInput_1.VideoCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoCreateNestedManyWithoutAuthorInput_1.VideoCreateNestedManyWithoutAuthorInput)
], UserCreateInput.prototype, "videos", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutUserInput_1.CommentCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateNestedManyWithoutUserInput_1.CommentCreateNestedManyWithoutUserInput)
], UserCreateInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeCreateNestedManyWithoutUserInput_1.LikeCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeCreateNestedManyWithoutUserInput_1.LikeCreateNestedManyWithoutUserInput)
], UserCreateInput.prototype, "likes", void 0);
exports.UserCreateInput = UserCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateInput", {})
], UserCreateInput);
