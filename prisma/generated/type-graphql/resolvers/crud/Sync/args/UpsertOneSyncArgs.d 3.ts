import { SyncCreateInput } from "../../../inputs/SyncCreateInput";
import { SyncUpdateInput } from "../../../inputs/SyncUpdateInput";
import { SyncWhereUniqueInput } from "../../../inputs/SyncWhereUniqueInput";
export declare class UpsertOneSyncArgs {
    where: SyncWhereUniqueInput;
    create: SyncCreateInput;
    update: SyncUpdateInput;
}
