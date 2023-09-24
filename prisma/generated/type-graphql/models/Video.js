"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Video = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VideoCount_1 = require("../resolvers/outputs/VideoCount");
let Video = exports.Video = class Video {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Video.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Video.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Video.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Video.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Video.prototype, "mintTx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Video.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoCount_1.VideoCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoCount_1.VideoCount)
], Video.prototype, "_count", void 0);
exports.Video = Video = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Video", {})
], Video);
