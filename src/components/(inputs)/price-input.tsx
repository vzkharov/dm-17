import { Input, InputGroup, type InputProps } from '@chakra-ui/react/input';

type PriceInputProps = Omit<InputProps, 'type' | 'value' | 'onChange'> & {
  value?: number;
  onValueChange?: (value: number) => void;
};

const PriceInput = ({ value, onValueChange, ...props }: PriceInputProps) => (
  <InputGroup endAddon='RUB'>
    <Input
      {...props}
      type='number'
      defaultValue={value}
      onChange={(e) => {
        const updatedValue = Number(e.target.value);
        e.target.value = updatedValue.toString();
        onValueChange?.(updatedValue);
      }}
    />
  </InputGroup>
);

export { PriceInput };
