"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeCreateManyVideoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let LikeCreateManyVideoInput = exports.LikeCreateManyVideoInput = class LikeCreateManyVideoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LikeCreateManyVideoInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LikeCreateManyVideoInput.prototype, "tx", void 0);
exports.LikeCreateManyVideoInput = LikeCreateManyVideoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LikeCreateManyVideoInput", {})
], LikeCreateManyVideoInput);
