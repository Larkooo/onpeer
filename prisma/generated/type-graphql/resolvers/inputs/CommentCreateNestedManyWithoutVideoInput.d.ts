import { CommentCreateManyVideoInputEnvelope } from "../inputs/CommentCreateManyVideoInputEnvelope";
import { CommentCreateOrConnectWithoutVideoInput } from "../inputs/CommentCreateOrConnectWithoutVideoInput";
import { CommentCreateWithoutVideoInput } from "../inputs/CommentCreateWithoutVideoInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";
export declare class CommentCreateNestedManyWithoutVideoInput {
    create?: CommentCreateWithoutVideoInput[] | undefined;
    connectOrCreate?: CommentCreateOrConnectWithoutVideoInput[] | undefined;
    createMany?: CommentCreateManyVideoInputEnvelope | undefined;
    connect?: CommentWhereUniqueInput[] | undefined;
}
