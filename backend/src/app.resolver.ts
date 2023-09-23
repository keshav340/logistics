import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class MyResolver {
  @Query(() => String) // Specifies the return type
  async hello(): Promise<string> {
    return 'Hello, World!';
  }
}
