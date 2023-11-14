import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { User } from 'src/user/user.entity';
import { corporateAdress } from './corporateadress.entity';
import { companyContact } from './companycontact.entity';
import { CorporateAddressDto } from './dto/corporate-adress.dto';
import { CompanyContactDto } from './dto/company-contact.dto';

@Injectable()
export class ProfileUpdateService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(corporateAdress)
    private readonly corporateAddressRepository: Repository<corporateAdress>,
    @InjectRepository(companyContact)
    private readonly companyContactRepository: Repository<companyContact>,
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

    let corporateAddress = user.CorporateAddress;

    if (!corporateAddress) {
      corporateAddress = new corporateAdress();
    }

    // Update corporate address fields
    corporateAddress.Adress = corporateAddressDto.Address || corporateAddress.Adress;
    corporateAddress.State = corporateAddressDto.State || corporateAddress.State;
    corporateAddress.City = corporateAddressDto.City || corporateAddress.City;
    corporateAddress.pincode = corporateAddressDto.pincode || corporateAddress.pincode;
    corporateAddress.country = corporateAddressDto.country || corporateAddress.country;

    // Save the corporate address entity
    const savedCorporateAddress = await this.corporateAddressRepository.save(corporateAddress);

    // Update user with the new corporate address
    user.CorporateAddress = savedCorporateAddress;

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

    let companyContactEntity = user.CompanyContact;

    if (!companyContactEntity) {
      companyContactEntity = new companyContact();
    }

    // Update company contact fields
    companyContactEntity.firstName = companyContactDto.firstName || companyContactEntity.firstName;
    companyContactEntity.lastname = companyContactDto.lastName || companyContactEntity.lastname;
    companyContactEntity.Designation = companyContactDto.Designation || companyContactEntity.Designation;
    companyContactEntity.Mobileno = companyContactDto.mobileno || companyContactEntity.Mobileno;
    companyContactEntity.emailid = companyContactDto.emailid || companyContactEntity.emailid;

    // Save the company contact entity
    const savedCompanyContact = await this.companyContactRepository.save(companyContactEntity);

    // Update user with the new company contact
    user.CompanyContact = savedCompanyContact;

    // Save the updated user entity
    return this.userRepository.save(user);
  }
}
