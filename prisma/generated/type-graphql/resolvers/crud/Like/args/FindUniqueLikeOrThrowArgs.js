"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueLikeOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LikeWhereUniqueInput_1 = require("../../../inputs/LikeWhereUniqueInput");
let FindUniqueLikeOrThrowArgs = exports.FindUniqueLikeOrThrowArgs = class FindUniqueLikeOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeWhereUniqueInput_1.LikeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LikeWhereUniqueInput_1.LikeWhereUniqueInput)
], FindUniqueLikeOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueLikeOrThrowArgs = FindUniqueLikeOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueLikeOrThrowArgs);
