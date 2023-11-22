import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { ProfileUpdateService } from './profileupdate.service';
import { User } from 'src/user/user.entity';
import { CorporateAddressDto } from './dto/corporate-adress.dto';
import { CompanyContactDto } from './dto/company-contact.dto';

@Resolver('ProfileUpdate')
export class ProfileUpdateResolver {
  constructor(private readonly profileUpdateService: ProfileUpdateService) {}

  @Mutation(() => User)
  async updateProfilecorporateAdress(
    @Args('userId') userId: number,
    @Args('corporateAddressDto') corporateAddressDto: CorporateAddressDto,
  ): Promise<User> {
    return this.profileUpdateService.updateProfilecorporateAdress(userId, corporateAddressDto);
  }

  @Mutation(() => User)
  async updateProfileCompanyContact(
    @Args('userId') userId: number,
    @Args('companyContactDto') companyContactDto: CompanyContactDto,
  ): Promise<User> {
    return this.profileUpdateService.updateProfileCompanyContact(userId, companyContactDto);
  }
}
