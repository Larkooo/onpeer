"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneVideoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VideoCreateInput_1 = require("../../../inputs/VideoCreateInput");
const VideoUpdateInput_1 = require("../../../inputs/VideoUpdateInput");
const VideoWhereUniqueInput_1 = require("../../../inputs/VideoWhereUniqueInput");
let UpsertOneVideoArgs = exports.UpsertOneVideoArgs = class UpsertOneVideoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoWhereUniqueInput_1.VideoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VideoWhereUniqueInput_1.VideoWhereUniqueInput)
], UpsertOneVideoArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoCreateInput_1.VideoCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VideoCreateInput_1.VideoCreateInput)
], UpsertOneVideoArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoUpdateInput_1.VideoUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VideoUpdateInput_1.VideoUpdateInput)
], UpsertOneVideoArgs.prototype, "update", void 0);
exports.UpsertOneVideoArgs = UpsertOneVideoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneVideoArgs);
