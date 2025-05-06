type ProductRow = {
  name: string;
  article: string;
  quantity: number;
  price: number;
  comment?: string;
};

type CellConfig = {
  key: keyof ProductRow;

  editable?: boolean;

  type: 'text' | 'number';
  label: string;
  placeholder: string;
  defaultValue: string | number | boolean;

  format?: <T extends string | number>(value: T) => T;

  width: number;
};

export type { CellConfig, ProductRow };
