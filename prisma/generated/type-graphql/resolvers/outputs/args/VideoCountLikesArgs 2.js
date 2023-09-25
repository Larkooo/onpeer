"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoCountLikesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LikeWhereInput_1 = require("../../inputs/LikeWhereInput");
let VideoCountLikesArgs = exports.VideoCountLikesArgs = class VideoCountLikesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeWhereInput_1.LikeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeWhereInput_1.LikeWhereInput)
], VideoCountLikesArgs.prototype, "where", void 0);
exports.VideoCountLikesArgs = VideoCountLikesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], VideoCountLikesArgs);
