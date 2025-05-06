import { Badge } from '@chakra-ui/react/badge';

import type { OrderStatus } from '~/entities/order';

import { orderStatusConfig } from '~/config/order-status';

const OrderStatusBadge = ({ status }: { status: OrderStatus }) => {
  const statusConfig = orderStatusConfig[status];

  return (
    <Badge
      size='md'
      variant='surface'
      colorPalette={statusConfig.color}
    >
      {statusConfig.label}
    </Badge>
  );
};

export { OrderStatusBadge };
