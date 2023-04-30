import { Query, Resolver } from '@nestjs/graphql';
import { User2Model } from './User2Model';

@Resolver(() => User2Model)
export class User2Resolver {
  @Query(() => User2Model)
  async user1() {
    return {
      id: '1',
      name: 'Alice',
    };
  }
}
