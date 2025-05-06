'use client';

import { Select, type SelectRootProps } from '@chakra-ui/react/select';
import { createListCollection } from '@chakra-ui/react/collection';
import type { HTMLChakraProps } from '@chakra-ui/react/styled-system';

import type { User } from '~/entities/user';

import { useUsersQuery } from '~/features/users/api';

type UserSelectProps = Omit<Partial<HTMLChakraProps<'div', SelectRootProps>>, 'value' | 'onValueChange'> & {
  value?: User;
  onValueChange?: (value: User) => void;
};

const UserSelect = ({ value, onValueChange, ...props }: UserSelectProps) => {
  const { data: users } = useUsersQuery();

  const selectedUserId = value?.id.toString();

  const collection = createListCollection({
    items: users ?? [],
    itemToString: (item) => item.name,
    itemToValue: (item) => item.id.toString(),
  });

  return (
    <Select.Root
      w='100%'
      {...props}
      collection={collection}
      value={selectedUserId ? [selectedUserId] : []}
      onValueChange={({ items }) => onValueChange?.(items[0])}
    >
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.ClearTrigger />
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>

      <Select.Positioner>
        <Select.Content>
          {collection.items.map((user) => (
            <Select.Item
              key={user.name}
              item={user}
            >
              {user.name}
              <Select.ItemIndicator />
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Positioner>
    </Select.Root>
  );
};

export { UserSelect };
