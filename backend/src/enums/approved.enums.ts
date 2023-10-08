import { registerEnumType } from '@nestjs/graphql';

export enum ApprovedUser {
   
   Approval_pending = 'Approval pending',
   Approved_users = 'Approved users',
   Rejected_users = 'Rejected users'

}

registerEnumType(ApprovedUser, {
  name: 'Approved_users',
  description: 'Approved users',
});
