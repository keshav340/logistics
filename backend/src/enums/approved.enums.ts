import { RESOLVER_TYPE_METADATA, registerEnumType } from '@nestjs/graphql';

export enum ApprovedUser {
   
   Approval_pending = 'Approval pending',
   Approved = 'Approved ',
   Rejected = 'Rejected',
   Reverted_user = 'Reverted user'

}

registerEnumType(ApprovedUser, {
  name: 'Approved_users',
  description: 'Approved users',
});
