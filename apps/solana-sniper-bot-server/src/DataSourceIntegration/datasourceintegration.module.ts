import { Module } from "@nestjs/common";
import { DataSourceIntegrationService } from "./datasourceintegration.service";
import { DataSourceIntegrationController } from "./datasourceintegration.controller";
import { DataSourceIntegrationResolver } from "./datasourceintegration.resolver";

@Module({
  controllers: [DataSourceIntegrationController],
  providers: [DataSourceIntegrationService, DataSourceIntegrationResolver],
  exports: [DataSourceIntegrationService],
})
export class DataSourceIntegrationModule {}
