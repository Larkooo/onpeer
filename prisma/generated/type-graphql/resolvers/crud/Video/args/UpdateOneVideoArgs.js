"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneVideoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VideoUpdateInput_1 = require("../../../inputs/VideoUpdateInput");
const VideoWhereUniqueInput_1 = require("../../../inputs/VideoWhereUniqueInput");
let UpdateOneVideoArgs = exports.UpdateOneVideoArgs = class UpdateOneVideoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoUpdateInput_1.VideoUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VideoUpdateInput_1.VideoUpdateInput)
], UpdateOneVideoArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoWhereUniqueInput_1.VideoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VideoWhereUniqueInput_1.VideoWhereUniqueInput)
], UpdateOneVideoArgs.prototype, "where", void 0);
exports.UpdateOneVideoArgs = UpdateOneVideoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneVideoArgs);
