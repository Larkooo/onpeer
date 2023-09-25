"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LikeCreateNestedManyWithoutUserInput_1 = require("../inputs/LikeCreateNestedManyWithoutUserInput");
const VideoCreateNestedManyWithoutAuthorInput_1 = require("../inputs/VideoCreateNestedManyWithoutAuthorInput");
let UserCreateWithoutCommentsInput = exports.UserCreateWithoutCommentsInput = class UserCreateWithoutCommentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutCommentsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoCreateNestedManyWithoutAuthorInput_1.VideoCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoCreateNestedManyWithoutAuthorInput_1.VideoCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutCommentsInput.prototype, "videos", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeCreateNestedManyWithoutUserInput_1.LikeCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeCreateNestedManyWithoutUserInput_1.LikeCreateNestedManyWithoutUserInput)
], UserCreateWithoutCommentsInput.prototype, "likes", void 0);
exports.UserCreateWithoutCommentsInput = UserCreateWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutCommentsInput", {})
], UserCreateWithoutCommentsInput);
