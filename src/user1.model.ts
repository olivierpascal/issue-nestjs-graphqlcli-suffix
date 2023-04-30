import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('User1')
export class User1Model {
  @Field(() => String)
  id: string;

  name: string;
}
