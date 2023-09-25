"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCountLikesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LikeWhereInput_1 = require("../../inputs/LikeWhereInput");
let UserCountLikesArgs = exports.UserCountLikesArgs = class UserCountLikesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeWhereInput_1.LikeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeWhereInput_1.LikeWhereInput)
], UserCountLikesArgs.prototype, "where", void 0);
exports.UserCountLikesArgs = UserCountLikesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UserCountLikesArgs);
