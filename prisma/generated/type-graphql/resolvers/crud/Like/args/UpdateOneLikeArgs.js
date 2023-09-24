"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneLikeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LikeUpdateInput_1 = require("../../../inputs/LikeUpdateInput");
const LikeWhereUniqueInput_1 = require("../../../inputs/LikeWhereUniqueInput");
let UpdateOneLikeArgs = exports.UpdateOneLikeArgs = class UpdateOneLikeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeUpdateInput_1.LikeUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LikeUpdateInput_1.LikeUpdateInput)
], UpdateOneLikeArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeWhereUniqueInput_1.LikeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LikeWhereUniqueInput_1.LikeWhereUniqueInput)
], UpdateOneLikeArgs.prototype, "where", void 0);
exports.UpdateOneLikeArgs = UpdateOneLikeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneLikeArgs);
