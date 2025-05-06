import type { ReactChildren } from '~/lib/types';

import { Toaster } from '~/providers/toaster';
import { ReduxProvider } from '~/providers/store-provider';
import { ChakraProvider } from '~/providers/chakra-provider';

type ProviderProps = {
  children: ReactChildren;
};

const Providers = ({ children }: ProviderProps) => (
  <ChakraProvider>
    <ReduxProvider>
      {children}
      <Toaster />
    </ReduxProvider>
  </ChakraProvider>
);

export { Providers };
