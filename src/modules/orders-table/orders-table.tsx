'use client';

import { Box } from '@chakra-ui/react/box';
import { For } from '@chakra-ui/react/for';
import { Table } from '@chakra-ui/react/table';

import { useAppSelector } from '~/hooks/use-store';
import { selectOrders } from '~/features/orders/selectors';

import { OrdersTableRow } from './orders-table-row';

import { cellProps } from './utils';
import { CELLS_CONFIG } from './constants';

const OrdersTable = () => {
  const orders = useAppSelector(selectOrders);

  return (
    <Box
      width='100%'
      height='100svh'
      overflow='auto'
    >
      <Table.Root
        stickyHeader
        maxHeight='100%'
        variant='outline'
        overflow='visible'
      >
        <Table.Header>
          <Table.Row>
            {CELLS_CONFIG.map((cell, idx) => (
              <Table.ColumnHeader
                key={idx}
                {...cellProps(cell, true)}
              >
                {cell.label}
              </Table.ColumnHeader>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <For each={orders.items}>
            {(order) => (
              <OrdersTableRow
                key={order.id}
                orderId={order.id}
              />
            )}
          </For>
        </Table.Body>
      </Table.Root>
    </Box>
  );
};

export { OrdersTable };
