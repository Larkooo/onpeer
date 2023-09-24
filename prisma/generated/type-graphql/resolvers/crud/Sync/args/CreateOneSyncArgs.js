"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneSyncArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SyncCreateInput_1 = require("../../../inputs/SyncCreateInput");
let CreateOneSyncArgs = exports.CreateOneSyncArgs = class CreateOneSyncArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncCreateInput_1.SyncCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SyncCreateInput_1.SyncCreateInput)
], CreateOneSyncArgs.prototype, "data", void 0);
exports.CreateOneSyncArgs = CreateOneSyncArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneSyncArgs);
