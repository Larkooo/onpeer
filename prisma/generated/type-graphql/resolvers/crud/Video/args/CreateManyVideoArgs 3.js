"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyVideoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VideoCreateManyInput_1 = require("../../../inputs/VideoCreateManyInput");
let CreateManyVideoArgs = exports.CreateManyVideoArgs = class CreateManyVideoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VideoCreateManyInput_1.VideoCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyVideoArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyVideoArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyVideoArgs = CreateManyVideoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyVideoArgs);
