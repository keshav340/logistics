import { Observable } from 'rxjs';
export declare class OtpService {
    private readonly otpSubject;
    setOtp(otp: string): void;
    getOtp(): Observable<string | null>;
    clearOtp(): void;
}
