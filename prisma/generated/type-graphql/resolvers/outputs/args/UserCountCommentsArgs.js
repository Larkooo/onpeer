"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCountCommentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentWhereInput_1 = require("../../inputs/CommentWhereInput");
let UserCountCommentsArgs = exports.UserCountCommentsArgs = class UserCountCommentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentWhereInput_1.CommentWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentWhereInput_1.CommentWhereInput)
], UserCountCommentsArgs.prototype, "where", void 0);
exports.UserCountCommentsArgs = UserCountCommentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UserCountCommentsArgs);
