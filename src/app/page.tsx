import { Text } from '@chakra-ui/react/typography';
import { Button } from '@chakra-ui/react/button';
import { HStack } from '@chakra-ui/react/stack';
import { Container } from '@chakra-ui/react/container';
import Link from 'next/link';

import type { Page } from '~/lib/types';

import { OrdersTable } from '~/modules/orders-table/orders-table';

const HomePage: Page = () => (
  <Container p={10}>
    <HStack
      w='100%'
      mb={6}
      align='center'
      justify='space-between'
    >
      <Text
        as='h1'
        fontSize={24}
        fontWeight='semibold'
      >
        Заказы
      </Text>

      <Link href='/create'>
        <Button
          size='md'
          shadow='md'
        >
          Добавить заказ
        </Button>
      </Link>
    </HStack>
    <OrdersTable />
  </Container>
);

export default HomePage;
