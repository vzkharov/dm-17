import type { TableCellProps } from '@chakra-ui/react/table';

import type { CellConfig } from './types';

const cellProps = (config: CellConfig, isHeader: boolean = false): TableCellProps => ({
  width: config.width,
  minWidth: config.width,
  maxWidth: config.width,
  py: '4px',
  ...(config.sticky && {
    right: 0,
    zIndex: 1,
    position: 'sticky',
    textAlign: 'center',
    backgroundColor: isHeader ? config.headerBackground : config.cellBackground,
  }),
});

export { cellProps };
