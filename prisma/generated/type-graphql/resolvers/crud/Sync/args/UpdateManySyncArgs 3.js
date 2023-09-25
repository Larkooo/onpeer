"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManySyncArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SyncUpdateManyMutationInput_1 = require("../../../inputs/SyncUpdateManyMutationInput");
const SyncWhereInput_1 = require("../../../inputs/SyncWhereInput");
let UpdateManySyncArgs = exports.UpdateManySyncArgs = class UpdateManySyncArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncUpdateManyMutationInput_1.SyncUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SyncUpdateManyMutationInput_1.SyncUpdateManyMutationInput)
], UpdateManySyncArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncWhereInput_1.SyncWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncWhereInput_1.SyncWhereInput)
], UpdateManySyncArgs.prototype, "where", void 0);
exports.UpdateManySyncArgs = UpdateManySyncArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManySyncArgs);
