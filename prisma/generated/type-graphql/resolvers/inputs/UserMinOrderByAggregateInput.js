"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let UserMinOrderByAggregateInput = exports.UserMinOrderByAggregateInput = class UserMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserMinOrderByAggregateInput.prototype, "id", void 0);
exports.UserMinOrderByAggregateInput = UserMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserMinOrderByAggregateInput", {})
], UserMinOrderByAggregateInput);
