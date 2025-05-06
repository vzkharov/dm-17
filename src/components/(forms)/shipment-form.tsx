'use client';

import { useMemo, useState } from 'react';

import { Field } from '@chakra-ui/react/field';
import { HStack } from '@chakra-ui/react/stack';
import { Fieldset } from '@chakra-ui/react/fieldset';
import { Clipboard } from '@chakra-ui/react/clipboard';
import { Button, IconButton } from '@chakra-ui/react/button';

import type { Address } from '~/entities/geo';
import { constructAddress } from '~/utils/address';

import { DateInput } from '~/components/(inputs)/date-input';
import { PriceInput } from '~/components/(inputs)/price-input';
import { AddressAutocomplete } from '~/components/(inputs)/address-autocomplete';

type FormValue = {
  price?: number;
  address?: Address;
  deliveryDate?: string;
};

type ShipmentFormProps = {
  defaultValue?: FormValue;
  onValueChange?: (value: FormValue | ((prevValue: FormValue) => FormValue)) => void;
};

const ShipmentForm = ({ onValueChange, defaultValue }: ShipmentFormProps) => {
  const prefilledDates = useMemo(() => createPrefilledDates(), []);
  const [formValue, setFormValue] = useState<FormValue>({
    price: 0,
    deliveryDate: prefilledDates[0].value,
    ...defaultValue,
  });

  const handleValueChange = <K extends keyof FormValue>(key: K, value: FormValue[K]) => {
    const updatedValue = { ...formValue, [key]: value };

    setFormValue(updatedValue);
    onValueChange?.(updatedValue);
  };

  return (
    <Fieldset.Root
      gap={6}
      w='100%'
      size='lg'
    >
      <Fieldset.Legend>Доставка</Fieldset.Legend>
      <Fieldset.Content>
        <Field.Root invalid={!formValue?.address}>
          <HStack
            w='100%'
            justify='space-between'
          >
            <Field.Label fontSize={14}>Адрес доставки</Field.Label>
            <Field.ErrorText>Это поле обязательное</Field.ErrorText>
          </HStack>

          <HStack w='100%'>
            <AddressAutocomplete
              value={formValue?.address}
              onSelectValue={(address) => handleValueChange('address', address)}
            />
            <Clipboard.Root value={formValue?.address ? constructAddress(formValue.address) : ''}>
              <Clipboard.Trigger asChild>
                <IconButton
                  size='sm'
                  variant='outline'
                  disabled={!formValue?.address}
                >
                  <Clipboard.Indicator />
                </IconButton>
              </Clipboard.Trigger>
            </Clipboard.Root>
          </HStack>
        </Field.Root>
        <Field.Root invalid={typeof formValue?.price !== 'number'}>
          <Field.Label fontSize={14}>Стоимость доставки</Field.Label>
          <PriceInput
            placeholder='Введите сумму'
            value={formValue?.price}
            onValueChange={(value) => handleValueChange('price', value)}
          />
        </Field.Root>
        <Field.Root invalid={!formValue?.deliveryDate}>
          <HStack
            w='100%'
            justify='space-between'
          >
            <Field.Label fontSize={14}>Дата доставки</Field.Label>
            <Field.ErrorText>Это поле обязательное</Field.ErrorText>
          </HStack>
          <DateInput
            value={formValue?.deliveryDate}
            onValueChange={(value) => handleValueChange('deliveryDate', value)}
          />
          <HStack mt={2}>
            {prefilledDates.map((date) => (
              <Button
                key={date.value}
                variant={formValue?.deliveryDate === date.value ? 'solid' : 'outline'}
                onClick={() => handleValueChange('deliveryDate', date.value)}
              >
                {date.label}
              </Button>
            ))}
          </HStack>
        </Field.Root>
      </Fieldset.Content>
    </Fieldset.Root>
  );
};

const createPrefilledDates = () => {
  const today = new Date(Date.now());
  today.setHours(12, 0, 0, 0);

  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const afterTomorrow = new Date(today);
  afterTomorrow.setDate(afterTomorrow.getDate() + 2);

  return [
    {
      label: 'Сегодня',
      value: today.toISOString(),
    },
    {
      label: 'Завтра',
      value: tomorrow.toISOString(),
    },
    {
      label: 'Послезавтра',
      value: afterTomorrow.toISOString(),
    },
  ];
};

export { ShipmentForm };
export type { FormValue };
