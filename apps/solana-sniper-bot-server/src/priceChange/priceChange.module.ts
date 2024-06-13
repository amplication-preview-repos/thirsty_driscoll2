import { Module } from "@nestjs/common";
import { PriceChangeModuleBase } from "./base/priceChange.module.base";
import { PriceChangeService } from "./priceChange.service";
import { PriceChangeController } from "./priceChange.controller";
import { PriceChangeResolver } from "./priceChange.resolver";

@Module({
  imports: [PriceChangeModuleBase],
  controllers: [PriceChangeController],
  providers: [PriceChangeService, PriceChangeResolver],
  exports: [PriceChangeService],
})
export class PriceChangeModule {}
