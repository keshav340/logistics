import { RESOLVER_TYPE_METADATA, registerEnumType } from '@nestjs/graphql';

export enum ShippingMode {
   Port = "Port",
   Airport = "Airport"
}

registerEnumType(ShippingMode, {
  name: 'ShippingMode',
  description: 'Mode of shipping operation',
});
