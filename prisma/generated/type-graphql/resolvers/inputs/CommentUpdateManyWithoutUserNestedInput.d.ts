import { CommentCreateManyUserInputEnvelope } from "../inputs/CommentCreateManyUserInputEnvelope";
import { CommentCreateOrConnectWithoutUserInput } from "../inputs/CommentCreateOrConnectWithoutUserInput";
import { CommentCreateWithoutUserInput } from "../inputs/CommentCreateWithoutUserInput";
import { CommentScalarWhereInput } from "../inputs/CommentScalarWhereInput";
import { CommentUpdateManyWithWhereWithoutUserInput } from "../inputs/CommentUpdateManyWithWhereWithoutUserInput";
import { CommentUpdateWithWhereUniqueWithoutUserInput } from "../inputs/CommentUpdateWithWhereUniqueWithoutUserInput";
import { CommentUpsertWithWhereUniqueWithoutUserInput } from "../inputs/CommentUpsertWithWhereUniqueWithoutUserInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";
export declare class CommentUpdateManyWithoutUserNestedInput {
    create?: CommentCreateWithoutUserInput[] | undefined;
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput[] | undefined;
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput[] | undefined;
    createMany?: CommentCreateManyUserInputEnvelope | undefined;
    set?: CommentWhereUniqueInput[] | undefined;
    disconnect?: CommentWhereUniqueInput[] | undefined;
    delete?: CommentWhereUniqueInput[] | undefined;
    connect?: CommentWhereUniqueInput[] | undefined;
    update?: CommentUpdateWithWhereUniqueWithoutUserInput[] | undefined;
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput[] | undefined;
    deleteMany?: CommentScalarWhereInput[] | undefined;
}
