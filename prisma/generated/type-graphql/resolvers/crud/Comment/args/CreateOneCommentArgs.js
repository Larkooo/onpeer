"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneCommentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateInput_1 = require("../../../inputs/CommentCreateInput");
let CreateOneCommentArgs = exports.CreateOneCommentArgs = class CreateOneCommentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateInput_1.CommentCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentCreateInput_1.CommentCreateInput)
], CreateOneCommentArgs.prototype, "data", void 0);
exports.CreateOneCommentArgs = CreateOneCommentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneCommentArgs);
