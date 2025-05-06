import { CalendarIcon } from 'lucide-react';
import { Input, InputGroup, type InputProps } from '@chakra-ui/react';

type DateInputProps = Omit<InputProps, 'type' | 'value' | 'onChange'> & {
  value?: string;
  onValueChange?: (value: string) => void;
};

const DateInput = ({ value, onValueChange, ...props }: DateInputProps) => (
  <InputGroup startElement={<CalendarIcon size={16} />}>
    <Input
      {...props}
      type='date'
      value={value ? fromIsoToDateValue(value) : ''}
      onChange={(e) => onValueChange?.(fromDateValueToIso(e.target.value))}
    />
  </InputGroup>
);

const fromIsoToDateValue = (iso: string): string => {
  const date = new Date(iso);
  date.setHours(12, 0, 0, 0);
  return date.toISOString().split('T')[0];
};
const fromDateValueToIso = (date: string): string => {
  const dateObj = new Date(date);
  dateObj.setHours(12, 0, 0, 0);
  return dateObj.toISOString();
};

export { DateInput };
export type { DateInputProps };
