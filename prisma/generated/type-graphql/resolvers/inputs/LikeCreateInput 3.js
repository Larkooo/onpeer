"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutLikesInput_1 = require("../inputs/UserCreateNestedOneWithoutLikesInput");
const VideoCreateNestedOneWithoutLikesInput_1 = require("../inputs/VideoCreateNestedOneWithoutLikesInput");
let LikeCreateInput = exports.LikeCreateInput = class LikeCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LikeCreateInput.prototype, "tx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutLikesInput_1.UserCreateNestedOneWithoutLikesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutLikesInput_1.UserCreateNestedOneWithoutLikesInput)
], LikeCreateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoCreateNestedOneWithoutLikesInput_1.VideoCreateNestedOneWithoutLikesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VideoCreateNestedOneWithoutLikesInput_1.VideoCreateNestedOneWithoutLikesInput)
], LikeCreateInput.prototype, "video", void 0);
exports.LikeCreateInput = LikeCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LikeCreateInput", {})
], LikeCreateInput);
