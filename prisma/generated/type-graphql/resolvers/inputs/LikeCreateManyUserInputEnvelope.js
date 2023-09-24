"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeCreateManyUserInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LikeCreateManyUserInput_1 = require("../inputs/LikeCreateManyUserInput");
let LikeCreateManyUserInputEnvelope = exports.LikeCreateManyUserInputEnvelope = class LikeCreateManyUserInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeCreateManyUserInput_1.LikeCreateManyUserInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], LikeCreateManyUserInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], LikeCreateManyUserInputEnvelope.prototype, "skipDuplicates", void 0);
exports.LikeCreateManyUserInputEnvelope = LikeCreateManyUserInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("LikeCreateManyUserInputEnvelope", {})
], LikeCreateManyUserInputEnvelope);
