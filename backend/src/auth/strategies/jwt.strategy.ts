import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'secret',
    });
  }

  async validate(payload: any) {
    // Modify this function to match the User type in your GraphQL schema
    return {
      userId: payload.id, // Map to the user ID field in your schema
      email: payload.email,
      userType: payload.userType,
      customerSubType: payload.customerSubType,
      vendorSubType: payload.vendorSubType,
      overseasAgentSubType: payload.overseasAgentSubType,
    };
  }
}