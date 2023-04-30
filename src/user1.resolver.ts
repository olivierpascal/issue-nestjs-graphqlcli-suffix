import { Query, Resolver } from '@nestjs/graphql';
import { User1Model } from './user1.model';

@Resolver(() => User1Model)
export class User1Resolver {
  @Query(() => User1Model)
  async user1() {
    return {
      id: '1',
      name: 'Bob',
    };
  }
}
