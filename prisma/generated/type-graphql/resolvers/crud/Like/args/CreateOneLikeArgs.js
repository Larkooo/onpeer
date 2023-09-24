"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneLikeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LikeCreateInput_1 = require("../../../inputs/LikeCreateInput");
let CreateOneLikeArgs = exports.CreateOneLikeArgs = class CreateOneLikeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeCreateInput_1.LikeCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LikeCreateInput_1.LikeCreateInput)
], CreateOneLikeArgs.prototype, "data", void 0);
exports.CreateOneLikeArgs = CreateOneLikeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneLikeArgs);
