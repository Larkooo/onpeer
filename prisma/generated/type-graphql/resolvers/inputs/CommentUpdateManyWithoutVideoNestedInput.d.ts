import { CommentCreateManyVideoInputEnvelope } from "../inputs/CommentCreateManyVideoInputEnvelope";
import { CommentCreateOrConnectWithoutVideoInput } from "../inputs/CommentCreateOrConnectWithoutVideoInput";
import { CommentCreateWithoutVideoInput } from "../inputs/CommentCreateWithoutVideoInput";
import { CommentScalarWhereInput } from "../inputs/CommentScalarWhereInput";
import { CommentUpdateManyWithWhereWithoutVideoInput } from "../inputs/CommentUpdateManyWithWhereWithoutVideoInput";
import { CommentUpdateWithWhereUniqueWithoutVideoInput } from "../inputs/CommentUpdateWithWhereUniqueWithoutVideoInput";
import { CommentUpsertWithWhereUniqueWithoutVideoInput } from "../inputs/CommentUpsertWithWhereUniqueWithoutVideoInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";
export declare class CommentUpdateManyWithoutVideoNestedInput {
    create?: CommentCreateWithoutVideoInput[] | undefined;
    connectOrCreate?: CommentCreateOrConnectWithoutVideoInput[] | undefined;
    upsert?: CommentUpsertWithWhereUniqueWithoutVideoInput[] | undefined;
    createMany?: CommentCreateManyVideoInputEnvelope | undefined;
    set?: CommentWhereUniqueInput[] | undefined;
    disconnect?: CommentWhereUniqueInput[] | undefined;
    delete?: CommentWhereUniqueInput[] | undefined;
    connect?: CommentWhereUniqueInput[] | undefined;
    update?: CommentUpdateWithWhereUniqueWithoutVideoInput[] | undefined;
    updateMany?: CommentUpdateManyWithWhereWithoutVideoInput[] | undefined;
    deleteMany?: CommentScalarWhereInput[] | undefined;
}
