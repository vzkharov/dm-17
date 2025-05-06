import type { User } from './user';
import type { Shipment } from './shipment';
import type { ProductOrder } from './product';

type OrderStatus = 'created' | 'completed' | 'cancelled';

type Order = {
  id: number;

  status: OrderStatus;

  customer: User;
  contactPhone?: string;

  products: ProductOrder[];
  shipment: Shipment;
  comment?: string;

  createdAt: string;
  updatedAt: string;
};

type CreateOrder = Omit<Order, 'id' | 'status' | 'createdAt' | 'updatedAt'>;
type UpdateOrder = Pick<Order, 'id' | 'status'>;

export type { Order, OrderStatus, CreateOrder, UpdateOrder };
