import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/user/user.entity";
import { ProfileUpdateService } from "./profileupdate.service";
import { ProfileUpdateResolver } from "./profileupdate.resolver";
import { corporateAdress } from "./corporateadress.entity";
import { companyContact } from './companycontact.entity';
import { kycdocuments } from "./kycdocument.entity";

@Module({
    imports: [TypeOrmModule.forFeature([User,corporateAdress,companyContact,kycdocuments])],
    providers: [ProfileUpdateService, ProfileUpdateResolver, 
      ],
    exports: [ProfileUpdateService],
  })
  export class profileUpdate {}
  