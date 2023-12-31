"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const client_1 = require("@prisma/client");
const VideoCountAggregate_1 = require("../outputs/VideoCountAggregate");
const VideoMaxAggregate_1 = require("../outputs/VideoMaxAggregate");
const VideoMinAggregate_1 = require("../outputs/VideoMinAggregate");
let VideoGroupBy = exports.VideoGroupBy = class VideoGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VideoGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VideoGroupBy.prototype, "tokenId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VideoGroupBy.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VideoGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VideoGroupBy.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VideoGroupBy.prototype, "mintTx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Object)
], VideoGroupBy.prototype, "mintSignature", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VideoGroupBy.prototype, "playbackId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], VideoGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoCountAggregate_1.VideoCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoCountAggregate_1.VideoCountAggregate)
], VideoGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoMinAggregate_1.VideoMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoMinAggregate_1.VideoMinAggregate)
], VideoGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoMaxAggregate_1.VideoMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoMaxAggregate_1.VideoMaxAggregate)
], VideoGroupBy.prototype, "_max", void 0);
exports.VideoGroupBy = VideoGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("VideoGroupBy", {})
], VideoGroupBy);
