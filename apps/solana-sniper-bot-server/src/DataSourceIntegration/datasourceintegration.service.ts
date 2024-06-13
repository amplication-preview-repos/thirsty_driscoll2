import { Injectable } from "@nestjs/common";

@Injectable()
export class DataSourceIntegrationService {
  constructor() {}
  async ConnectWebSocket(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async FetchTokenData(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
