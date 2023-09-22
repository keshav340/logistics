import { UserService } from './user.service';
import { Password } from './inputdto/password.input';
import { SelectUserTypeAndSubtypeInput } from './inputdto/selectusertypesubtype.input';
import { EmailInput } from './inputdto/email.input';
import { User } from './user.entity';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    acceptEmail(emailInput: EmailInput): Promise<User>;
    sendOTP(email: string): Promise<string>;
    initialRegistration(userInput: SelectUserTypeAndSubtypeInput, emailInput: EmailInput): Promise<User>;
    savePassword(passwordInput: Password, userId: number): Promise<User>;
    listInitialRegistrations(): Promise<User[]>;
    listAllOtps(): Promise<string[]>;
    getOtpByEmail(email: string): Promise<string | null>;
}
