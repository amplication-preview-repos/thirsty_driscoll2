import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { DataSourceIntegrationService } from "./datasourceintegration.service";

@swagger.ApiTags("dataSourceIntegrations")
@common.Controller("dataSourceIntegrations")
export class DataSourceIntegrationController {
  constructor(protected readonly service: DataSourceIntegrationService) {}

  @common.Post("/connect-websocket")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ConnectWebSocket(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ConnectWebSocket(body);
      }

  @common.Get("/fetch-token-data")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FetchTokenData(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.FetchTokenData(body);
      }
}
