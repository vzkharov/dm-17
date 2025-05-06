'use client';

import { memo, useState, useTransition } from 'react';
import { For } from '@chakra-ui/react/for';
import { Box } from '@chakra-ui/react/box';
import { Table } from '@chakra-ui/react/table';
import { Button, IconButton } from '@chakra-ui/react/button';
import { InfoIcon, Trash2 } from 'lucide-react';

import { Tooltip } from '~/components/ui/tooltip';
import { EditableCell } from '~/components/(inputs)/editable-cell';

import type { ProductRow } from './types';
import { CELLS_CONFIG } from './constants';
import { cellProps, createEmptyRow, isRowValid } from './utils';

type FormValue = ProductRow[];

type ProductFormProps = {
  onProductsChange: (products: FormValue | ((prevProducts: FormValue) => FormValue)) => void;
};

const ProductForm = memo(({ onProductsChange }: ProductFormProps) => {
  const [products, setProducts] = useState<FormValue>([]);
  const [, startTransition] = useTransition();

  const handleInputChange = <T extends keyof ProductRow>(idx: number, field: T, value: ProductRow[T]) => {
    const updatedProducts = products.map((product, _idx) => {
      if (_idx !== idx) {
        return product;
      }

      return { ...product, [field]: value };
    });

    // Update products local state
    setProducts(updatedProducts);

    // Filter valid products to external component
    startTransition(() => {
      const filteredProducts = updatedProducts.filter((product) => isRowValid(product));
      onProductsChange(filteredProducts);
    });
  };

  const createRow = () => {
    setProducts((prevProducts) => [...prevProducts, createEmptyRow()]);
  };

  const removeRow = (idx: number) => {
    if (products.length <= 1) {
      return;
    }

    const updatedProducts = products.filter((_, _idx) => _idx !== idx);

    setProducts(updatedProducts);
    onProductsChange(updatedProducts);
  };

  return (
    <Box w='100%'>
      <Table.Root
        w='100%'
        variant='outline'
      >
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader width='60px'>№</Table.ColumnHeader>

            {CELLS_CONFIG.map((cell) => (
              <Table.ColumnHeader
                key={cell.key}
                {...cellProps(cell)}
              >
                {cell.label}
              </Table.ColumnHeader>
            ))}

            <Table.ColumnHeader width='60px'></Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <For
            key='products-rows'
            each={products}
          >
            {(product, idx) => (
              <Table.Row key={idx}>
                {/** No. Cell */}
                <Table.Cell
                  key={idx}
                  gap={2}
                  width='60px'
                  display='flex'
                  alignItems='center'
                >
                  {idx + 1}

                  {!isRowValid(product) ? (
                    <Tooltip content='Заполните все поля'>
                      <InfoIcon
                        size={16}
                        color='red'
                      />
                    </Tooltip>
                  ) : null}
                </Table.Cell>

                {/** Editable cells */}
                <For
                  key={`products-cells-${idx}`}
                  each={CELLS_CONFIG}
                >
                  {(cell) => (
                    <Table.Cell
                      {...cellProps(cell)}
                      py={0}
                      key={cell.key}
                    >
                      <EditableCell
                        type={cell.type}
                        value={product[cell.key] ?? ''}
                        placeholder={cell.placeholder}
                        onChange={(value) => handleInputChange(idx, cell.key, cell.format ? cell.format(value) : value)}
                      />
                    </Table.Cell>
                  )}
                </For>

                {/** Remove row */}
                <Table.Cell py={0}>
                  <IconButton
                    size='sm'
                    variant='ghost'
                    onClick={() => removeRow(idx)}
                    disabled={products.length === 1}
                  >
                    <Trash2 />
                  </IconButton>
                </Table.Cell>
              </Table.Row>
            )}
          </For>

          {/** Add new row */}
          <Table.Row>
            <Table.Cell
              p={0}
              colSpan={CELLS_CONFIG.length + 2}
            >
              <Button
                size='sm'
                width='full'
                variant='ghost'
                onClick={createRow}
                color='gray.500'
              >
                Заполните данные по товару
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </Box>
  );
});
ProductForm.displayName = 'ProductForm';

export { ProductForm };
export type { FormValue };
