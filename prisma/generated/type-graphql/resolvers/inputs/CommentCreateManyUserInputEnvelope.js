"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCreateManyUserInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateManyUserInput_1 = require("../inputs/CommentCreateManyUserInput");
let CommentCreateManyUserInputEnvelope = exports.CommentCreateManyUserInputEnvelope = class CommentCreateManyUserInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentCreateManyUserInput_1.CommentCreateManyUserInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CommentCreateManyUserInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CommentCreateManyUserInputEnvelope.prototype, "skipDuplicates", void 0);
exports.CommentCreateManyUserInputEnvelope = CommentCreateManyUserInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentCreateManyUserInputEnvelope", {})
], CommentCreateManyUserInputEnvelope);
