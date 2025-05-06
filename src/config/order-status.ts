import type { OrderStatus } from '~/entities/order';

type OrderStatusConfig = {
  id: OrderStatus;
  label: string;
  color: string;
};

const orderStatusConfig = {
  created: {
    id: 'created',
    label: 'Создан',
    color: 'blue',
  },
  completed: {
    id: 'completed',
    label: 'Завершен',
    color: 'green',
  },
  cancelled: {
    id: 'cancelled',
    label: 'Отменен',
    color: 'red',
  },
} satisfies Record<OrderStatus, OrderStatusConfig>;

export { orderStatusConfig };
