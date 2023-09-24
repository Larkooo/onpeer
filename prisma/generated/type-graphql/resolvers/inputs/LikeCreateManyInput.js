"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let LikeCreateManyInput = exports.LikeCreateManyInput = class LikeCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LikeCreateManyInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LikeCreateManyInput.prototype, "videoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LikeCreateManyInput.prototype, "tx", void 0);
exports.LikeCreateManyInput = LikeCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LikeCreateManyInput", {})
], LikeCreateManyInput);
