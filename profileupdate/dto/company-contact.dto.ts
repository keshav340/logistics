// company-contact.dto.ts
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CompanyContactDto {
  @Field({ nullable: true })
  firstName: string;

  @Field({ nullable: true })
  lastName: string;

  @Field({ nullable: true })
  Designation: string;

  @Field({ nullable: true })
  mobileno: string;

  @Field({ nullable: true })
  emailid: string;
}
