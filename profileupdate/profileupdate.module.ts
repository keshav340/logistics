import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/user/user.entity";
import { ProfileUpdateService } from "./profileupdate.service";
import { ProfileUpdateResolver } from "./profileupdate.resolver";
import { CorporateAddress } from "./corporate.entity";
import { CompanyContact } from "./company.entity";
import { Kyc } from "./kyc.entity";

@Module({
    imports: [TypeOrmModule.forFeature([User,CorporateAddress,CompanyContact,Kyc])],
    providers: [ProfileUpdateService, ProfileUpdateResolver, 
      ],
    exports: [ProfileUpdateService],
  })
  export class profileUpdate {}
  