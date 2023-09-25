"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueLikeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LikeWhereUniqueInput_1 = require("../../../inputs/LikeWhereUniqueInput");
let FindUniqueLikeArgs = exports.FindUniqueLikeArgs = class FindUniqueLikeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeWhereUniqueInput_1.LikeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LikeWhereUniqueInput_1.LikeWhereUniqueInput)
], FindUniqueLikeArgs.prototype, "where", void 0);
exports.FindUniqueLikeArgs = FindUniqueLikeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueLikeArgs);
