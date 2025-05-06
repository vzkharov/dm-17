import type { ReactChildren } from '~/lib/types';

import { selectOrderTableDataById } from '~/features/orders/selectors';

type OrderTableData = Exclude<ReturnType<typeof selectOrderTableDataById>, undefined>;

type CellConfig = {
  key: string;
  label: string;
  width: number;

  sticky?: boolean;

  cellBackground?: string;
  headerBackground?: string;

  render: (value: OrderTableData) => ReactChildren;
};

export type { CellConfig, OrderTableData };
