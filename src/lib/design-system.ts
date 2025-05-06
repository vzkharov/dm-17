import { defineTextStyles, defineLayerStyles } from '@chakra-ui/react';

import { variables } from './fonts';

const textStyles = defineTextStyles({
  body: {
    value: {
      fontFamily: variables.inter,
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '24px',
      letterSpacing: '0',
      textTransform: 'None',
      textDecoration: 'None',
    },
  },
});

const layerStyles = defineLayerStyles({
  container: {
    value: {
      padding: '40px',
      paddingBlock: '20px',
    },
  },
  fill: {
    value: {
      backgroundColor: 'colorPalette.primary.main',
    },
  },
  outline: {
    value: {
      borderColor: 'colorPalette.primary.main',
    },
  },
});

const colorTokens = {
  primary: {
    main: { value: '#7bb9e8' },
    50: { value: '#e3f2fd' },
    100: { value: '#bbdefb' },
    200: { value: '#90caf9' },
    300: { value: '#64b5f6' },
    400: { value: '#42a5f5' },
    500: { value: '#2196f3' },
    600: { value: '#1e88e5' },
    700: { value: '#1976d2' },
    800: { value: '#1565c0' },
    900: { value: '#0d47a1' },
  },
} as const;

export { colorTokens, textStyles, layerStyles };
