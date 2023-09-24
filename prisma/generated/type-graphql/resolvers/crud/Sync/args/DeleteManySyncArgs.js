"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManySyncArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SyncWhereInput_1 = require("../../../inputs/SyncWhereInput");
let DeleteManySyncArgs = exports.DeleteManySyncArgs = class DeleteManySyncArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncWhereInput_1.SyncWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncWhereInput_1.SyncWhereInput)
], DeleteManySyncArgs.prototype, "where", void 0);
exports.DeleteManySyncArgs = DeleteManySyncArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManySyncArgs);
