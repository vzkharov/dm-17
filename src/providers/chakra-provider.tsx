'use client';

import { ChakraProvider as Provider, defaultConfig, createSystem, defineConfig } from '@chakra-ui/react';

import type { Layout } from '~/lib/types';
import { colorTokens, layerStyles, textStyles } from '~/lib/design-system';

const config = defineConfig({
  theme: {
    tokens: { colors: { ...colorTokens } },
    textStyles,
    layerStyles,
  },
});

const system = createSystem(defaultConfig, config);

const ChakraProvider: Layout = (props) => <Provider value={system}>{props.children}</Provider>;

export { ChakraProvider };
