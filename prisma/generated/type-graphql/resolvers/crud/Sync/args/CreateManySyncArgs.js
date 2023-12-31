"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManySyncArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SyncCreateManyInput_1 = require("../../../inputs/SyncCreateManyInput");
let CreateManySyncArgs = exports.CreateManySyncArgs = class CreateManySyncArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SyncCreateManyInput_1.SyncCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManySyncArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManySyncArgs.prototype, "skipDuplicates", void 0);
exports.CreateManySyncArgs = CreateManySyncArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManySyncArgs);
