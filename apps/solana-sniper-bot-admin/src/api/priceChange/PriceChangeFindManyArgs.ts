import { PriceChangeWhereInput } from "./PriceChangeWhereInput";
import { PriceChangeOrderByInput } from "./PriceChangeOrderByInput";

export type PriceChangeFindManyArgs = {
  where?: PriceChangeWhereInput;
  orderBy?: Array<PriceChangeOrderByInput>;
  skip?: number;
  take?: number;
};
