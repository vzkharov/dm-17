import { Editable } from '@chakra-ui/react/editable';

type EditableCellProps<T extends string | number> = {
  type: 'text' | 'number';
  placeholder: string;
  value: T;
  onChange: (value: T) => void;
};

const EditableCell = <T extends string | number>({ type, placeholder, value, onChange }: EditableCellProps<T>) => (
  <Editable.Root
    w='100%'
    ml='-4px'
    size='md'
    value={String(value)}
    placeholder={String(value) || placeholder}
    onValueChange={(e) => onChange(e.value as T)}
  >
    <Editable.Preview
      truncate
      w='100%'
      borderRadius='none'
    />
    <Editable.Input
      w='100%'
      type={type}
      borderRadius='none'
    />
  </Editable.Root>
);

export { EditableCell };
