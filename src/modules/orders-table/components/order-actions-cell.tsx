'use client';

import { HStack } from '@chakra-ui/react/stack';
import { IconButton } from '@chakra-ui/react/button';
import { CheckIcon, XIcon } from 'lucide-react';

import { useAppDispatch } from '~/hooks/use-store';
import { updateOrder } from '~/features/orders/actions';

import { Tooltip } from '~/components/ui/tooltip';

const OrderActionsCell = ({ orderId }: { orderId: number }) => {
  const dispatch = useAppDispatch();

  return (
    <HStack
      gap={0}
      justifyContent='center'
    >
      <Tooltip content='Отменить заказ'>
        <IconButton
          size='xs'
          variant='ghost'
          colorPalette='red'
          onClick={() => dispatch(updateOrder({ id: orderId, status: 'cancelled' }))}
        >
          <XIcon />
        </IconButton>
      </Tooltip>
      <Tooltip content='Завершить заказ'>
        <IconButton
          size='xs'
          variant='ghost'
          colorPalette='green'
          onClick={() => dispatch(updateOrder({ id: orderId, status: 'completed' }))}
        >
          <CheckIcon />
        </IconButton>
      </Tooltip>
    </HStack>
  );
};

export { OrderActionsCell };
