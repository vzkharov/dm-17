import type { Address } from './geo';

type Shipment = {
  address: Address;
  price: number;
  deliveryDate: string;
};

export type { Shipment };
