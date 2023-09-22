import { Repository } from 'typeorm';
import { User } from './user.entity';
import { EmailInput } from './inputdto/email.input';
import { SelectUserTypeAndSubtypeInput } from './inputdto/selectusertypesubtype.input';
import { Password } from './inputdto/password.input';
import { Cache } from 'cache-manager';
export declare class UserService {
    private cacheManager;
    private readonly userRepository;
    private readonly inMemoryCache;
    constructor(cacheManager: Cache, userRepository: Repository<User>);
    acceptEmail(input: EmailInput): Promise<User>;
    sendotp(email: string): Promise<void>;
    initialregisteration(input: SelectUserTypeAndSubtypeInput, emailinput: EmailInput): Promise<User>;
    savePassword(input: Password, userId: number): Promise<User>;
    generateOTP(length: number): Promise<string>;
    listInitialRegistrations(): Promise<User[]>;
    listAllOtps(): Promise<string[]>;
    getOtpByEmail(email: string): Promise<string | null>;
}
