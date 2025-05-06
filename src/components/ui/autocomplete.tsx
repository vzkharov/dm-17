'use client';

import React, { useTransition } from 'react';
import { useState, createContext, useContext } from 'react';
import { Box, type BoxProps } from '@chakra-ui/react/box';
import { List, type ListRootProps } from '@chakra-ui/react/list';
import { Input, type InputProps } from '@chakra-ui/react/input';

import type { ReactChildren } from '~/lib/types';

type AutocompleteState = {
  isFocused: boolean;
  onFocusChange: (value: boolean) => void;
};

const ctx = createContext<AutocompleteState>({
  isFocused: false,
  onFocusChange: () => {},
});

type AutocompleteProps = {
  children: ReactChildren;
};

const Autocomplete = ({ children }: AutocompleteProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Box
      width='100%'
      position='relative'
    >
      <ctx.Provider
        value={{
          isFocused,

          onFocusChange: setIsFocused,
        }}
      >
        {children}
      </ctx.Provider>
    </Box>
  );
};

const AutocompleteInput = ({ onFocus, onBlur, ...props }: InputProps) => {
  const { onFocusChange } = useContext(ctx);

  const [, startTransition] = useTransition();

  return (
    <Input
      {...props}
      onFocus={(e) => {
        onFocus?.(e);
        onFocusChange(true);
      }}
      onBlur={(e) => {
        onBlur?.(e);
        startTransition(() => {
          setTimeout(() => {
            onFocusChange(false);
          }, 100);
        });
      }}
    />
  );
};

const AutocompleteList = ({ children }: ListRootProps) => {
  const { isFocused } = useContext(ctx);

  if (!isFocused || React.Children.count(children) === 0) {
    return null;
  }

  return (
    <List.Root
      position='absolute'
      width='100%'
      bg='white'
      mt='2'
      borderRadius='md'
      boxShadow='md'
      zIndex='10'
      p={1}
      maxH='300px'
      overflowY='auto'
      border='1px'
      borderColor='gray.200'
    >
      {children}
    </List.Root>
  );
};

const AutocompleteItem = ({ onClick, children, ...props }: BoxProps) => {
  const { onFocusChange } = useContext(ctx);
  const [, startTransition] = useTransition();

  return (
    <Box
      py={2.5}
      px={2}
      gap={2}
      fontSize='14px'
      display='flex'
      cursor='pointer'
      alignItems='center'
      _hover={{ bg: 'gray.100' }}
      {...props}
      onClick={(e) => {
        onClick?.(e);
        startTransition(() => {
          onFocusChange(false);
        });
      }}
    >
      {children}
    </Box>
  );
};

export { Autocomplete, AutocompleteInput, AutocompleteList, AutocompleteItem };
