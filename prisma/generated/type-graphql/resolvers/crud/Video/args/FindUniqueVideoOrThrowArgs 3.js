"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueVideoOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VideoWhereUniqueInput_1 = require("../../../inputs/VideoWhereUniqueInput");
let FindUniqueVideoOrThrowArgs = exports.FindUniqueVideoOrThrowArgs = class FindUniqueVideoOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoWhereUniqueInput_1.VideoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VideoWhereUniqueInput_1.VideoWhereUniqueInput)
], FindUniqueVideoOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueVideoOrThrowArgs = FindUniqueVideoOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueVideoOrThrowArgs);
