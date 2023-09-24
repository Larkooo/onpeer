"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyCommentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateManyInput_1 = require("../../../inputs/CommentCreateManyInput");
let CreateManyCommentArgs = exports.CreateManyCommentArgs = class CreateManyCommentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentCreateManyInput_1.CommentCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyCommentArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyCommentArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyCommentArgs = CreateManyCommentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyCommentArgs);
