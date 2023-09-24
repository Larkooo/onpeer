import { UserCountOrderByAggregateInput } from "../inputs/UserCountOrderByAggregateInput";
import { UserMaxOrderByAggregateInput } from "../inputs/UserMaxOrderByAggregateInput";
import { UserMinOrderByAggregateInput } from "../inputs/UserMinOrderByAggregateInput";
export declare class UserOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    _count?: UserCountOrderByAggregateInput | undefined;
    _max?: UserMaxOrderByAggregateInput | undefined;
    _min?: UserMinOrderByAggregateInput | undefined;
}
