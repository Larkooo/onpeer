"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VideoCreateManyInput = exports.VideoCreateManyInput = class VideoCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VideoCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VideoCreateManyInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VideoCreateManyInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VideoCreateManyInput.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VideoCreateManyInput.prototype, "mintTx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VideoCreateManyInput.prototype, "createdAt", void 0);
exports.VideoCreateManyInput = VideoCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VideoCreateManyInput", {})
], VideoCreateManyInput);
