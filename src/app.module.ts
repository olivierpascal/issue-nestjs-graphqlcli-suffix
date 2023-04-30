import path from 'path';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { User1Resolver } from './user1.resolver';
import { User2Resolver } from './user2.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: path.join('src', 'schema.gql'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService, User1Resolver, User2Resolver],
})
export class AppModule {}
