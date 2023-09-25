"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyVideoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VideoWhereInput_1 = require("../../../inputs/VideoWhereInput");
let DeleteManyVideoArgs = exports.DeleteManyVideoArgs = class DeleteManyVideoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoWhereInput_1.VideoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoWhereInput_1.VideoWhereInput)
], DeleteManyVideoArgs.prototype, "where", void 0);
exports.DeleteManyVideoArgs = DeleteManyVideoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyVideoArgs);
