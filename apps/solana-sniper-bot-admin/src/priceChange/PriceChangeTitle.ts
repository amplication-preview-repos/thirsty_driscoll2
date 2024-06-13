import { PriceChange as TPriceChange } from "../api/priceChange/PriceChange";

export const PRICECHANGE_TITLE_FIELD = "id";

export const PriceChangeTitle = (record: TPriceChange): string => {
  return record.id?.toString() || String(record.id);
};
