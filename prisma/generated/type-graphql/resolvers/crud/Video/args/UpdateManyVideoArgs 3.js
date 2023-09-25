"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyVideoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VideoUpdateManyMutationInput_1 = require("../../../inputs/VideoUpdateManyMutationInput");
const VideoWhereInput_1 = require("../../../inputs/VideoWhereInput");
let UpdateManyVideoArgs = exports.UpdateManyVideoArgs = class UpdateManyVideoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoUpdateManyMutationInput_1.VideoUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VideoUpdateManyMutationInput_1.VideoUpdateManyMutationInput)
], UpdateManyVideoArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoWhereInput_1.VideoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoWhereInput_1.VideoWhereInput)
], UpdateManyVideoArgs.prototype, "where", void 0);
exports.UpdateManyVideoArgs = UpdateManyVideoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyVideoArgs);
