"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoUpdateManyWithWhereWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VideoScalarWhereInput_1 = require("../inputs/VideoScalarWhereInput");
const VideoUpdateManyMutationInput_1 = require("../inputs/VideoUpdateManyMutationInput");
let VideoUpdateManyWithWhereWithoutAuthorInput = exports.VideoUpdateManyWithWhereWithoutAuthorInput = class VideoUpdateManyWithWhereWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoScalarWhereInput_1.VideoScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VideoScalarWhereInput_1.VideoScalarWhereInput)
], VideoUpdateManyWithWhereWithoutAuthorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoUpdateManyMutationInput_1.VideoUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VideoUpdateManyMutationInput_1.VideoUpdateManyMutationInput)
], VideoUpdateManyWithWhereWithoutAuthorInput.prototype, "data", void 0);
exports.VideoUpdateManyWithWhereWithoutAuthorInput = VideoUpdateManyWithWhereWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VideoUpdateManyWithWhereWithoutAuthorInput", {})
], VideoUpdateManyWithWhereWithoutAuthorInput);
