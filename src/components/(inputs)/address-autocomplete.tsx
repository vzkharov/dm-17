'use client';

import { useCallback, useMemo, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Spinner } from '@chakra-ui/react/spinner';
import { InputGroup } from '@chakra-ui/react/input';

import type { Address } from '~/entities/geo';
import { constructAddress } from '~/utils/address';

import { useDebounceValue } from '~/hooks/use-debounce-value';
import { useSuggestionsQuery } from '~/features/suggestions/api';

import { Autocomplete, AutocompleteInput, AutocompleteItem, AutocompleteList } from '~/components/ui/autocomplete';

type AddressAutocompleteProps = {
  value?: Address;
  onSelectValue?: (value: Address) => void;
};

const AddressAutocomplete = ({ onSelectValue, value }: AddressAutocompleteProps) => {
  const [isDirty, setIsDirty] = useState<boolean>(true);
  const [query, setQuery] = useState<string>('');
  const debouncedQuery = useDebounceValue(query, 500);

  const { data: suggestions, isLoading } = useSuggestionsQuery(debouncedQuery, {
    skip: isDirty && debouncedQuery.length < 3,
  });

  const inputValue = useMemo(() => {
    if (isDirty) {
      return query;
    }

    return value ? constructAddress(value) : '';
  }, [isDirty, query, value]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setIsDirty(true);
  }, []);

  const handleSelectAddress = useCallback(
    (address: Address) => {
      setIsDirty(false);
      onSelectValue?.(address);
    },
    [onSelectValue]
  );

  return (
    <Autocomplete>
      <InputGroup endElement={isLoading ? <Spinner /> : <ChevronDown size={16} />}>
        <AutocompleteInput
          placeholder='Введите адрес'
          value={inputValue}
          onChange={handleInputChange}
        />
      </InputGroup>
      <AutocompleteList>
        {suggestions?.map((address, idx) => (
          <AutocompleteItem
            key={idx}
            display='flex'
            flexDirection='column'
            alignItems='flex-start'
            justifyContent='flex-start'
            onClick={() => handleSelectAddress(address)}
          >
            {constructAddress(address)}
          </AutocompleteItem>
        ))}
      </AutocompleteList>
    </Autocomplete>
  );
};

export { AddressAutocomplete };
