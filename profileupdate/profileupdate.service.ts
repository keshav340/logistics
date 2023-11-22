import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { User } from 'src/user/user.entity';
import { CorporateAddress } from './corporate.entity';
import { CompanyContact } from './company.entity';
import { CorporateAddressDto } from './dto/corporate-adress.dto';
import { CompanyContactDto } from './dto/company-contact.dto';

@Injectable()
export class ProfileUpdateService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(CorporateAddress)
    private readonly corporateAddressRepository: Repository<CorporateAddress>,
    @InjectRepository(CompanyContact)
    private readonly companyContactRepository: Repository<CompanyContact>,
  ) {}

  async updateProfilecorporateAdress(userId: number, corporateAddressDto: CorporateAddressDto): Promise<User> {
    const user = await this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.corporateAddress', 'corporateAddress')
      .where('user.id = :userId', { userId })
      .getOne();

    if (!user) {
      throw new Error('User not found');
    }

    let corporateAddress = user.corporateAddress;

    if (!corporateAddress) {
      corporateAddress = new CorporateAddress();
    }

    // Update corporate address fields
    corporateAddress.address = corporateAddressDto.address || corporateAddress.address;
    corporateAddress.state = corporateAddressDto.state || corporateAddress.state;
    corporateAddress.city = corporateAddressDto.city || corporateAddress.city;
    corporateAddress.pincode = corporateAddressDto.pincode || corporateAddress.pincode;
    corporateAddress.country = corporateAddressDto.country || corporateAddress.country;

    // Save the corporate address entity
    const savedCorporateAddress = await this.corporateAddressRepository.save(corporateAddress);

    // Update user with the new corporate address
    user.corporateAddress = savedCorporateAddress;

    // Save the updated user entity
    return this.userRepository.save(user);
  }

  async updateProfileCompanyContact(userId: number, companyContactDto: CompanyContactDto): Promise<User> {
    const user = await this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.companyContact', 'companyContact')
      .where('user.id = :userId', { userId })
      .getOne();

    if (!user) {
      throw new Error('User not found');
    }

    let companyContactEntity = user.companyContact;

    if (!companyContactEntity) {
      companyContactEntity = new CompanyContact();
    }

    // Update company contact fields
    companyContactEntity.firstName = companyContactDto.firstName || companyContactEntity.firstName;
    companyContactEntity.lastName = companyContactDto.lastName || companyContactEntity.lastName;
    companyContactEntity.designation = companyContactDto.designation || companyContactEntity.designation;
    companyContactEntity.mobileNo = companyContactDto.mobileNo || companyContactEntity.mobileNo;
    companyContactEntity.emailId = companyContactDto.emailId || companyContactEntity.emailId;

    // Save the company contact entity
    const savedCompanyContact = await this.companyContactRepository.save(companyContactEntity);

    // Update user with the new company contact
    user.companyContact = savedCompanyContact;

    // Save the updated user entity
    return this.userRepository.save(user);
  }
  
}
