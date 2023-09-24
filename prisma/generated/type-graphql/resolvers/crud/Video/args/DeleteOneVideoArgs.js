"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneVideoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VideoWhereUniqueInput_1 = require("../../../inputs/VideoWhereUniqueInput");
let DeleteOneVideoArgs = exports.DeleteOneVideoArgs = class DeleteOneVideoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoWhereUniqueInput_1.VideoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VideoWhereUniqueInput_1.VideoWhereUniqueInput)
], DeleteOneVideoArgs.prototype, "where", void 0);
exports.DeleteOneVideoArgs = DeleteOneVideoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneVideoArgs);
