import type { CellConfig } from './types';

const CELLS_CONFIG_MAP = {
  name: {
    key: 'name',

    label: 'Название',
    placeholder: '-',

    type: 'text',
    defaultValue: '',

    width: 100,
    editable: true,
  },
  article: {
    key: 'article',

    label: 'Артикул',
    placeholder: '-',

    type: 'text',
    defaultValue: '',
    // @ts-expect-error different input types
    format: (value: string) => value.replace(/[^A-Z0-9\-]/gi, '').toUpperCase(),

    width: 100,
    editable: true,
  },
  quantity: {
    key: 'quantity',

    label: 'Количество',
    placeholder: '0',

    type: 'number',
    defaultValue: 0,
    // @ts-expect-error different input types
    format: (value: number | string) => (typeof value === 'number' ? Math.floor(value) : Math.floor(Number(value))),

    width: 100,
    editable: true,
  },
  price: {
    key: 'price',

    label: 'Цена',
    placeholder: '0',

    type: 'number',
    defaultValue: 0,
    // @ts-expect-error different input types
    format: (value: number | string) => (typeof value === 'number' ? value : Number(value)),

    width: 100,
    editable: true,
  },
  comment: {
    key: 'comment',

    label: 'Комментарий',
    placeholder: '-',

    type: 'text',
    defaultValue: '',

    width: 100,
    editable: true,
  },
} satisfies Record<string, CellConfig>;

// @ts-expect-error different input types
const CELLS_CONFIG: CellConfig[] = Object.values(CELLS_CONFIG_MAP);

export { CELLS_CONFIG, CELLS_CONFIG_MAP };
