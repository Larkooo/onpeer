"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeCreateManyVideoInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LikeCreateManyVideoInput_1 = require("../inputs/LikeCreateManyVideoInput");
let LikeCreateManyVideoInputEnvelope = exports.LikeCreateManyVideoInputEnvelope = class LikeCreateManyVideoInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeCreateManyVideoInput_1.LikeCreateManyVideoInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], LikeCreateManyVideoInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], LikeCreateManyVideoInputEnvelope.prototype, "skipDuplicates", void 0);
exports.LikeCreateManyVideoInputEnvelope = LikeCreateManyVideoInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("LikeCreateManyVideoInputEnvelope", {})
], LikeCreateManyVideoInputEnvelope);
