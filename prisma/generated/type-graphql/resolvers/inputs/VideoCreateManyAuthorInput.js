"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoCreateManyAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VideoCreateManyAuthorInput = exports.VideoCreateManyAuthorInput = class VideoCreateManyAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VideoCreateManyAuthorInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VideoCreateManyAuthorInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VideoCreateManyAuthorInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VideoCreateManyAuthorInput.prototype, "mintTx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VideoCreateManyAuthorInput.prototype, "createdAt", void 0);
exports.VideoCreateManyAuthorInput = VideoCreateManyAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VideoCreateManyAuthorInput", {})
], VideoCreateManyAuthorInput);
