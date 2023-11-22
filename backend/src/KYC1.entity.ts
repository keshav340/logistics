// kyc.entity.ts

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType, Scalar } from '@nestjs/graphql';
import { GraphQLScalarType, Kind } from 'graphql';

// Define the custom scalar type for key-value pairs
const KeyValueScalar = new GraphQLScalarType({
  name: 'KeyValue',
  description: 'Custom scalar type for key-value pairs',
  parseValue(value: Record<string, any>) {
    return value;
  },
  serialize(value: Record<string, string>) {
    return value;
  },
  parseLiteral(ast) {
    switch (ast.kind) {
      case Kind.OBJECT:
        const obj = {};
        ast.fields.forEach((field) => {
          obj[field.name.value] = field.value.kind === Kind.STRING ? field.value.value : null;
        });
        return obj;
      default:
        return null;
    }
  },
});

@ObjectType()
@Entity()
export class Kyc1 {
  @PrimaryGeneratedColumn()
  @Field(() => Number)
  id: number;

  @Column('jsonb', { nullable: true })
  @Field(() => KeyValueScalar, { nullable: true })
  certificate_of_registration: Record<string, any>;
}
