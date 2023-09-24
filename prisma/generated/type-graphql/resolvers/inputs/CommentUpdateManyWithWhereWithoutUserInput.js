"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentUpdateManyWithWhereWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentScalarWhereInput_1 = require("../inputs/CommentScalarWhereInput");
const CommentUpdateManyMutationInput_1 = require("../inputs/CommentUpdateManyMutationInput");
let CommentUpdateManyWithWhereWithoutUserInput = exports.CommentUpdateManyWithWhereWithoutUserInput = class CommentUpdateManyWithWhereWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentScalarWhereInput_1.CommentScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentScalarWhereInput_1.CommentScalarWhereInput)
], CommentUpdateManyWithWhereWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateManyMutationInput_1.CommentUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentUpdateManyMutationInput_1.CommentUpdateManyMutationInput)
], CommentUpdateManyWithWhereWithoutUserInput.prototype, "data", void 0);
exports.CommentUpdateManyWithWhereWithoutUserInput = CommentUpdateManyWithWhereWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentUpdateManyWithWhereWithoutUserInput", {})
], CommentUpdateManyWithWhereWithoutUserInput);
