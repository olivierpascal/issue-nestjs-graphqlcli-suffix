import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('User2')
export class User2Model {
  @Field(() => String)
  id: string;

  name: string;
}
