import { CommentCountAggregate } from "../outputs/CommentCountAggregate";
import { CommentMaxAggregate } from "../outputs/CommentMaxAggregate";
import { CommentMinAggregate } from "../outputs/CommentMinAggregate";
export declare class AggregateComment {
    _count: CommentCountAggregate | null;
    _min: CommentMinAggregate | null;
    _max: CommentMaxAggregate | null;
}
