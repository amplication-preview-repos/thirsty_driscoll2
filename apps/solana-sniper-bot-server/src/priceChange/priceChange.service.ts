import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PriceChangeServiceBase } from "./base/priceChange.service.base";

@Injectable()
export class PriceChangeService extends PriceChangeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
