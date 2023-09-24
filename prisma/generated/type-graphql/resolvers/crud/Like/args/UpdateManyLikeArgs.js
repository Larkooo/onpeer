"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyLikeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LikeUpdateManyMutationInput_1 = require("../../../inputs/LikeUpdateManyMutationInput");
const LikeWhereInput_1 = require("../../../inputs/LikeWhereInput");
let UpdateManyLikeArgs = exports.UpdateManyLikeArgs = class UpdateManyLikeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeUpdateManyMutationInput_1.LikeUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LikeUpdateManyMutationInput_1.LikeUpdateManyMutationInput)
], UpdateManyLikeArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeWhereInput_1.LikeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeWhereInput_1.LikeWhereInput)
], UpdateManyLikeArgs.prototype, "where", void 0);
exports.UpdateManyLikeArgs = UpdateManyLikeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyLikeArgs);
