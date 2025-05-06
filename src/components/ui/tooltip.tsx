import { forwardRef } from 'react';
import { Portal } from '@chakra-ui/react/portal';
import { Tooltip as ChakraTooltip } from '@chakra-ui/react';

import type { ReactChildren } from '~/lib/types';

type TooltipProps = ChakraTooltip.RootProps & {
  disabled?: boolean;
  portalled?: boolean;

  content: ReactChildren;
};

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(function Tooltip(props, ref) {
  const { children, disabled, portalled = true, content, ...rest } = props;

  if (disabled) {
    return children;
  }

  return (
    <ChakraTooltip.Root {...rest}>
      <ChakraTooltip.Trigger asChild>{children}</ChakraTooltip.Trigger>
      <Portal disabled={!portalled}>
        <ChakraTooltip.Positioner>
          <ChakraTooltip.Content ref={ref}>{content}</ChakraTooltip.Content>
        </ChakraTooltip.Positioner>
      </Portal>
    </ChakraTooltip.Root>
  );
});

export { Tooltip };
export type { TooltipProps };
