"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneLikeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LikeWhereUniqueInput_1 = require("../../../inputs/LikeWhereUniqueInput");
let DeleteOneLikeArgs = exports.DeleteOneLikeArgs = class DeleteOneLikeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeWhereUniqueInput_1.LikeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LikeWhereUniqueInput_1.LikeWhereUniqueInput)
], DeleteOneLikeArgs.prototype, "where", void 0);
exports.DeleteOneLikeArgs = DeleteOneLikeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneLikeArgs);
