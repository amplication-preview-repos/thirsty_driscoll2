/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { PriceChange } from "./PriceChange";
import { PriceChangeCountArgs } from "./PriceChangeCountArgs";
import { PriceChangeFindManyArgs } from "./PriceChangeFindManyArgs";
import { PriceChangeFindUniqueArgs } from "./PriceChangeFindUniqueArgs";
import { DeletePriceChangeArgs } from "./DeletePriceChangeArgs";
import { PriceChangeService } from "../priceChange.service";
@graphql.Resolver(() => PriceChange)
export class PriceChangeResolverBase {
  constructor(protected readonly service: PriceChangeService) {}

  async _priceChangesMeta(
    @graphql.Args() args: PriceChangeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [PriceChange])
  async priceChanges(
    @graphql.Args() args: PriceChangeFindManyArgs
  ): Promise<PriceChange[]> {
    return this.service.priceChanges(args);
  }

  @graphql.Query(() => PriceChange, { nullable: true })
  async priceChange(
    @graphql.Args() args: PriceChangeFindUniqueArgs
  ): Promise<PriceChange | null> {
    const result = await this.service.priceChange(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => PriceChange)
  async deletePriceChange(
    @graphql.Args() args: DeletePriceChangeArgs
  ): Promise<PriceChange | null> {
    try {
      return await this.service.deletePriceChange(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}