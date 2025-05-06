'use client';

import { useMemo, useState, useCallback } from 'react';
import { CheckIcon, XIcon } from 'lucide-react';
import { Box } from '@chakra-ui/react/box';
import { Input, InputGroup, InputProps } from '@chakra-ui/react/input';

import { isValidPhone, formatPhone, phoneMask } from '~/utils/phone';

type PhoneInputProps = Omit<InputProps, 'value' | 'onChange' | 'defaultValue'> & {
  defaultValue?: string;
  onChange?: (value: string) => void;
};

const PhoneInput = ({ onChange, defaultValue, ...props }: PhoneInputProps) => {
  const [value, setValue] = useState(formatPhone(defaultValue ?? ''));

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const rawValue = e.target.value;

      const formattedValue = formatPhone(rawValue);
      setValue(formattedValue);

      e.target.value = formattedValue;
      onChange?.(rawValue);
    },
    [onChange]
  );

  const isComplete = useMemo(() => isValidPhone(value), [value]);

  const statusIcon = useMemo(() => {
    if (isComplete) {
      return (
        <Box color='green.600'>
          <CheckIcon size={18} />
        </Box>
      );
    }

    return (
      <Box color='red.600'>
        <XIcon size={18} />
      </Box>
    );
  }, [isComplete]);

  return (
    <InputGroup endElement={statusIcon}>
      <Input
        type='tel'
        value={value}
        onChange={handleChange}
        placeholder={phoneMask}
        {...props}
      />
    </InputGroup>
  );
};

export { PhoneInput };
