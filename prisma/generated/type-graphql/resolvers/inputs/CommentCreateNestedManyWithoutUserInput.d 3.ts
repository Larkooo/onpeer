import { CommentCreateManyUserInputEnvelope } from "../inputs/CommentCreateManyUserInputEnvelope";
import { CommentCreateOrConnectWithoutUserInput } from "../inputs/CommentCreateOrConnectWithoutUserInput";
import { CommentCreateWithoutUserInput } from "../inputs/CommentCreateWithoutUserInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";
export declare class CommentCreateNestedManyWithoutUserInput {
    create?: CommentCreateWithoutUserInput[] | undefined;
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput[] | undefined;
    createMany?: CommentCreateManyUserInputEnvelope | undefined;
    connect?: CommentWhereUniqueInput[] | undefined;
}
