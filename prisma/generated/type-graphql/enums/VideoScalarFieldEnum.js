"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var VideoScalarFieldEnum;
(function (VideoScalarFieldEnum) {
    VideoScalarFieldEnum["id"] = "id";
    VideoScalarFieldEnum["tokenId"] = "tokenId";
    VideoScalarFieldEnum["title"] = "title";
    VideoScalarFieldEnum["description"] = "description";
    VideoScalarFieldEnum["authorId"] = "authorId";
    VideoScalarFieldEnum["mintTx"] = "mintTx";
    VideoScalarFieldEnum["createdAt"] = "createdAt";
})(VideoScalarFieldEnum || (exports.VideoScalarFieldEnum = VideoScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(VideoScalarFieldEnum, {
    name: "VideoScalarFieldEnum",
    description: undefined,
});
