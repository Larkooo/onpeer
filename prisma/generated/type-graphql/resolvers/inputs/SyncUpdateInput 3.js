"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
let SyncUpdateInput = exports.SyncUpdateInput = class SyncUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], SyncUpdateInput.prototype, "chainId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], SyncUpdateInput.prototype, "latestBlockNumber", void 0);
exports.SyncUpdateInput = SyncUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SyncUpdateInput", {})
], SyncUpdateInput);
