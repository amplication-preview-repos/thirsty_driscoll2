import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PriceChangeService } from "./priceChange.service";
import { PriceChangeControllerBase } from "./base/priceChange.controller.base";

@swagger.ApiTags("priceChanges")
@common.Controller("priceChanges")
export class PriceChangeController extends PriceChangeControllerBase {
  constructor(protected readonly service: PriceChangeService) {
    super(service);
  }
}
