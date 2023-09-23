// otp.service.ts
import { Injectable } from '@nestjs/common';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class OtpService {
  private readonly otpSubject = new BehaviorSubject<string | null>(null);

  setOtp(otp: string): void {
    this.otpSubject.next(otp);
  }

  getOtp(): Observable<string | null> {
    return this.otpSubject.asObservable();
  }

  clearOtp(): void {
    this.otpSubject.next(null);
  }
}
