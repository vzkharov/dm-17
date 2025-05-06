'use client';

import { memo, useState } from 'react';
import { Field } from '@chakra-ui/react/field';
import { HStack } from '@chakra-ui/react/stack';
import { Fieldset } from '@chakra-ui/react/fieldset';
import { Textarea } from '@chakra-ui/react/textarea';

import type { User } from '~/entities/user';

import { PhoneInput } from '~/components/(inputs)/phone-input';
import { UserSelect } from '~/components/(inputs)/user-select';

type FormValue = {
  phone?: string;
  comment?: string;
  customer?: User;
};

type CustomerFormProps = {
  defaultValue?: FormValue;
  onValueChange?: (value: FormValue | ((prevValue: FormValue) => FormValue)) => void;
};

const CustomerForm = memo(({ onValueChange, defaultValue }: CustomerFormProps) => {
  const [formValue, setFormValue] = useState<FormValue>(defaultValue ?? {});

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
      <Fieldset.Legend>Данные заказа</Fieldset.Legend>

      <Fieldset.Content>
        <Field.Root invalid={!formValue?.customer}>
          <HStack
            w='100%'
            justify='space-between'
          >
            <Field.Label fontSize={14}>Постоянный клиент</Field.Label>
            <Field.ErrorText>Это поле обязательное</Field.ErrorText>
          </HStack>
          <UserSelect
            value={formValue?.customer}
            onValueChange={(value) => handleValueChange('customer', value)}
          />
        </Field.Root>
        <Field.Root>
          <Field.Label fontSize={14}>Номер телефона</Field.Label>
          <PhoneInput
            defaultValue={formValue?.phone}
            onChange={(value) => handleValueChange('phone', value)}
          />
        </Field.Root>
        <Field.Root>
          <Field.Label>Комментарий</Field.Label>
          <Textarea
            minH={100}
            value={formValue?.comment}
            onChange={(e) => handleValueChange('comment', e.target.value)}
            placeholder='Добавьте комментарий'
          />
        </Field.Root>
      </Fieldset.Content>
    </Fieldset.Root>
  );
});
CustomerForm.displayName = 'CustomerForm';

export { CustomerForm };
export type { FormValue };
