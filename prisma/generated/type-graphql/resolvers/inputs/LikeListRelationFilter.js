"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LikeWhereInput_1 = require("../inputs/LikeWhereInput");
let LikeListRelationFilter = exports.LikeListRelationFilter = class LikeListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeWhereInput_1.LikeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeWhereInput_1.LikeWhereInput)
], LikeListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeWhereInput_1.LikeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeWhereInput_1.LikeWhereInput)
], LikeListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeWhereInput_1.LikeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeWhereInput_1.LikeWhereInput)
], LikeListRelationFilter.prototype, "none", void 0);
exports.LikeListRelationFilter = LikeListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("LikeListRelationFilter", {})
], LikeListRelationFilter);
