"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyLikeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LikeCreateManyInput_1 = require("../../../inputs/LikeCreateManyInput");
let CreateManyLikeArgs = exports.CreateManyLikeArgs = class CreateManyLikeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeCreateManyInput_1.LikeCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyLikeArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyLikeArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyLikeArgs = CreateManyLikeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyLikeArgs);
