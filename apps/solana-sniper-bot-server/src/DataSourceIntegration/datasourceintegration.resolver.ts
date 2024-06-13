import * as graphql from "@nestjs/graphql";
import { DataSourceIntegrationService } from "./datasourceintegration.service";

export class DataSourceIntegrationResolver {
  constructor(protected readonly service: DataSourceIntegrationService) {}

  @graphql.Mutation(() => String)
  async ConnectWebSocket(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ConnectWebSocket(args);
  }

  @graphql.Query(() => String)
  async FetchTokenData(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.FetchTokenData(args);
  }
}
