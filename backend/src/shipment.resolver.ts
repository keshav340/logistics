// // src/shipment.resolver.ts
// import { Args, Query, Resolver } from '@nestjs/graphql';
// import { City, Port, OceanFreight, Shipment } from './shipment.model';

// @Resolver(() => Shipment)
// export class ShipmentResolver {
//   @Query(() => [Shipment])
//   async getShipments(
//     @Args('ST20', { type: () => Number }) st20: number,
//     @Args('from', { type: () => [Number, Number] }) from: [number, number],
//     @Args('to', { type: () => [Number, Number] }) to: [number, number],
//     @Args('currency', { type: () => String }) currency: string,
//   ): Promise<Shipment[]> {
//     return [
//       {
//         shipmentId: '17714472',
//         cityFrom: { name: 'Shanghai Shi, Pudong Xinqu, Ma Ji Lu', countryCode: 'CN' },
//         cityTo: { name: 'Loop Fwy, Houston, TX 77012, USA', countryCode: 'US' },
//         portFrom: { name: 'Shanghai', code: 'CNSHA', countryCode: 'CN' },
//         portTo: { name: 'Houston', code: 'USHOU', countryCode: 'US' },
//         freight: [
//           { price: 2959, transitTime: '32 days', shippingLine: 'COSCO' }
//         ]
//       },
//     ];
//   }
// }
