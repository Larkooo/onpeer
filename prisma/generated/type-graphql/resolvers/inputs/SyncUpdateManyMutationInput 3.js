"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
let SyncUpdateManyMutationInput = exports.SyncUpdateManyMutationInput = class SyncUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], SyncUpdateManyMutationInput.prototype, "chainId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], SyncUpdateManyMutationInput.prototype, "latestBlockNumber", void 0);
exports.SyncUpdateManyMutationInput = SyncUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SyncUpdateManyMutationInput", {})
], SyncUpdateManyMutationInput);
