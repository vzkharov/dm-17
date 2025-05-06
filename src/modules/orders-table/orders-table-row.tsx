'use client';

import { For } from '@chakra-ui/react/for';
import { Table } from '@chakra-ui/react/table';

import { useAppSelector } from '~/hooks/use-store';
import { selectOrderTableDataById } from '~/features/orders/selectors';

import { cellProps } from './utils';
import { CELLS_CONFIG } from './constants';

const OrdersTableRow = ({ orderId }: { orderId: number }) => {
  const order = useAppSelector((state) => selectOrderTableDataById(state, orderId));

  if (!order) {
    return null;
  }

  return (
    <Table.Row
      h='42px'
      minH='42px'
      maxH='42px'
    >
      <For each={CELLS_CONFIG}>
        {(cell) => (
          <Table.Cell
            key={cell.key}
            {...cellProps(cell, false)}
          >
            {cell.render(order)}
          </Table.Cell>
        )}
      </For>
    </Table.Row>
  );
};

export { OrdersTableRow };
