import type { TableCellProps } from '@chakra-ui/react/table';

import type { CellConfig, ProductRow } from './types';

const cellProps = (config: CellConfig): TableCellProps => ({
  width: config.width,
  minWidth: config.width,
  maxWidth: config.width,
  height: '42px',
});

const createEmptyRow = (): ProductRow => ({
  name: '',
  article: '',
  price: 0,
  quantity: 0,
});

const isRowValid = (row: ProductRow): boolean => Boolean(row.name && row.article && row.quantity && row.price);

export { cellProps, createEmptyRow, isRowValid };
