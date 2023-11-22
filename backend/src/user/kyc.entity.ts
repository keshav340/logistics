import { User } from "src/user/user.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
//import { FileInput } from "./dto/fileinput.dto";
import { GraphQLScalarType, Kind } from 'graphql';
 export const KeyValueScalar = new GraphQLScalarType({
  name: 'KeyValue',
  description: 'Custom scalar type for key-value pairs',
  parseValue(value: Record<string, string>) {
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
@Entity()  
@ObjectType()
export class Kyc {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Column('jsonb', { nullable: true })
  @Field(() => KeyValueScalar, { nullable: true })
  certificate_of_registration: Record<string, string>;

  @Column('jsonb', { nullable: true })
  @Field(() => KeyValueScalar, { nullable: true })
  company_pan_card: Record<string, string>;

  @Column('jsonb', { nullable: true })
  @Field(() => KeyValueScalar, { nullable: true })
  aadhar_card: Record<string, string>;

  @Column('jsonb', { nullable: true })
  @Field(() => KeyValueScalar, { nullable: true })
  pan_card: Record<string, string>;

  @Column('jsonb', { nullable: true })
  @Field(() => KeyValueScalar, { nullable: true })
  iso_certificate: Record<string, string>;

  @Column('jsonb', { nullable: true })
  @Field(() => KeyValueScalar, { nullable: true })
  aeo_certificate: Record<string, string>;

  @Column('jsonb', { nullable: true })
  @Field(() => KeyValueScalar, { nullable: true })
  iata_certificate: Record<string, string>;

  @Column('jsonb', { nullable: true })
  @Field(() => KeyValueScalar, { nullable: true })
  duns_certificate: Record<string, string>;

  @Column('jsonb', { nullable: true })
  @Field(() => KeyValueScalar, { nullable: true })
  manufacturing_license: Record<string, string>;

  @Column('jsonb', { nullable: true })
  @Field(() => KeyValueScalar, { nullable: true })
  warehouse_insurance: Record<string, string>;

  @Column('jsonb', { nullable: true })
  @Field(() => KeyValueScalar, { nullable: true })
  any_other_trading_license: Record<string, string>;

  // Add a relationship with the User entity if needed
//   @OneToOne(()=>User,(user)=>user.kyc)
//   @Field(()=>User,{nullable:true})
//   user: User;

}
