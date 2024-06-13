import * as graphql from "@nestjs/graphql";
import { PriceChangeResolverBase } from "./base/priceChange.resolver.base";
import { PriceChange } from "./base/PriceChange";
import { PriceChangeService } from "./priceChange.service";

@graphql.Resolver(() => PriceChange)
export class PriceChangeResolver extends PriceChangeResolverBase {
  constructor(protected readonly service: PriceChangeService) {
    super(service);
  }
}
