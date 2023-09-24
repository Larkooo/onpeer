"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneVideoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VideoCreateInput_1 = require("../../../inputs/VideoCreateInput");
let CreateOneVideoArgs = exports.CreateOneVideoArgs = class CreateOneVideoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoCreateInput_1.VideoCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VideoCreateInput_1.VideoCreateInput)
], CreateOneVideoArgs.prototype, "data", void 0);
exports.CreateOneVideoArgs = CreateOneVideoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneVideoArgs);
