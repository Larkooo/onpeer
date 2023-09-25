"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VideoCreateNestedOneWithoutLikesInput_1 = require("../inputs/VideoCreateNestedOneWithoutLikesInput");
let LikeCreateWithoutUserInput = exports.LikeCreateWithoutUserInput = class LikeCreateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LikeCreateWithoutUserInput.prototype, "tx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoCreateNestedOneWithoutLikesInput_1.VideoCreateNestedOneWithoutLikesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VideoCreateNestedOneWithoutLikesInput_1.VideoCreateNestedOneWithoutLikesInput)
], LikeCreateWithoutUserInput.prototype, "video", void 0);
exports.LikeCreateWithoutUserInput = LikeCreateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LikeCreateWithoutUserInput", {})
], LikeCreateWithoutUserInput);
