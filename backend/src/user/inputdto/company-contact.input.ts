import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CompanyContactDto {
  @Field({ nullable: true })
  firstName: string;

  @Field({ nullable: true })
  lastName: string;

  @Field({ nullable: true })
  designation: string;

  @Field({ nullable: true })
  mobileNo: string;

  @Field({ nullable: true })
  emailId: string;
}