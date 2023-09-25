"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeUserIdVideoIdCompoundUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let LikeUserIdVideoIdCompoundUniqueInput = exports.LikeUserIdVideoIdCompoundUniqueInput = class LikeUserIdVideoIdCompoundUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LikeUserIdVideoIdCompoundUniqueInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LikeUserIdVideoIdCompoundUniqueInput.prototype, "videoId", void 0);
exports.LikeUserIdVideoIdCompoundUniqueInput = LikeUserIdVideoIdCompoundUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LikeUserIdVideoIdCompoundUniqueInput", {})
], LikeUserIdVideoIdCompoundUniqueInput);
