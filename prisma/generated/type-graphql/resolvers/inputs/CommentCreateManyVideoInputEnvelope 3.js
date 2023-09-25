"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCreateManyVideoInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateManyVideoInput_1 = require("../inputs/CommentCreateManyVideoInput");
let CommentCreateManyVideoInputEnvelope = exports.CommentCreateManyVideoInputEnvelope = class CommentCreateManyVideoInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentCreateManyVideoInput_1.CommentCreateManyVideoInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CommentCreateManyVideoInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CommentCreateManyVideoInputEnvelope.prototype, "skipDuplicates", void 0);
exports.CommentCreateManyVideoInputEnvelope = CommentCreateManyVideoInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentCreateManyVideoInputEnvelope", {})
], CommentCreateManyVideoInputEnvelope);
