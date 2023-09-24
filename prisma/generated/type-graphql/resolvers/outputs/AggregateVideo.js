"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateVideo = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VideoCountAggregate_1 = require("../outputs/VideoCountAggregate");
const VideoMaxAggregate_1 = require("../outputs/VideoMaxAggregate");
const VideoMinAggregate_1 = require("../outputs/VideoMinAggregate");
let AggregateVideo = exports.AggregateVideo = class AggregateVideo {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoCountAggregate_1.VideoCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoCountAggregate_1.VideoCountAggregate)
], AggregateVideo.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoMinAggregate_1.VideoMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoMinAggregate_1.VideoMinAggregate)
], AggregateVideo.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoMaxAggregate_1.VideoMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoMaxAggregate_1.VideoMaxAggregate)
], AggregateVideo.prototype, "_max", void 0);
exports.AggregateVideo = AggregateVideo = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateVideo", {})
], AggregateVideo);
