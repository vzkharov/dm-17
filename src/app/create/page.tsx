'use client';

import { useMemo, useState } from 'react';
import { Box } from '@chakra-ui/react/box';
import { Flex } from '@chakra-ui/react/flex';
import { Button } from '@chakra-ui/react/button';
import { Text } from '@chakra-ui/react/typography';
import { Separator } from '@chakra-ui/react/separator';
import { Container } from '@chakra-ui/react/container';
import { HStack, VStack } from '@chakra-ui/react/stack';
import { useRouter } from 'next/navigation';

import type { Page } from '~/lib/types';

import { toaster } from '~/providers/toaster';
import { addOrder } from '~/features/orders/actions';
import { useAppDispatch } from '~/hooks/use-store';

import { ProductForm, type FormValue as ProductFormValue } from '~/modules/products-table';
import { CustomerForm, type FormValue as CustomerFormValue } from '~/components/(forms)/customer-form';
import { ShipmentForm, type FormValue as ShipmentFormValue } from '~/components/(forms)/shipment-form';

const CreateOrderPage: Page = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [customer, setCustomer] = useState<CustomerFormValue>({});
  const [shipment, setShipment] = useState<ShipmentFormValue>({});
  const [products, setProducts] = useState<ProductFormValue>([]);

  const totalPrice = useMemo(
    () => products.reduce((acc, product) => acc + product.price * product.quantity, 0),
    [products]
  );

  const handleSubmit = () => {
    if (!customer.customer || !customer.phone || !shipment.address || !shipment.price || !shipment.deliveryDate) {
      toaster.error({
        title: 'Ошибка',
        description: 'Заполните все поля',
      });

      return;
    }

    dispatch(
      addOrder({
        products,
        customer: customer.customer,
        contactPhone: customer.phone,
        comment: customer.comment,
        shipment: {
          price: shipment.price,
          address: shipment.address,
          deliveryDate: shipment.deliveryDate,
        },
      })
    );

    router.push('/');
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <Container p={10}>
      <Text
        as='h1'
        mb={10}
        fontSize={24}
        fontWeight='semibold'
      >
        Создание заказа
      </Text>

      <HStack
        gap={10}
        alignItems='flex-start'
      >
        <VStack
          gap={10}
          w='100%'
          maxW='sm'
        >
          <CustomerForm onValueChange={setCustomer} />
          <ShipmentForm onValueChange={setShipment} />
        </VStack>

        <Separator orientation='vertical' />

        <VStack
          width='100%'
          alignItems='flex-start'
          justifyContent='flex-center'
        >
          <Text
            as='h2'
            mb={4}
            lineHeight='1.5'
          >
            Товары к заказу
          </Text>

          <ProductForm onProductsChange={setProducts} />

          <PriceStats
            price={totalPrice}
            deliveryPrice={shipment.price}
          />

          <HStack
            w='100%'
            mt={10}
            gap={4}
            justifyContent='flex-end'
          >
            <Button
              w='1/6'
              variant='ghost'
              onClick={handleCancel}
            >
              Отменить
            </Button>
            <Button
              w='1/6'
              onClick={handleSubmit}
            >
              Создать
            </Button>
          </HStack>
        </VStack>
      </HStack>
    </Container>
  );
};

const PriceStats = ({ price = 0, deliveryPrice = 0 }: { price?: number; deliveryPrice?: number }) => (
  <Box
    w='100%'
    p={4}
  >
    <Flex
      justify='space-between'
      py={2}
    >
      <Text
        fontSize={14}
        fontWeight='medium'
      >
        СУММА
      </Text>
      <Text
        fontSize={14}
        fontWeight='medium'
      >
        {price}
      </Text>
    </Flex>
    <Flex
      justify='space-between'
      py={2}
    >
      <Text
        fontSize={14}
        fontWeight='medium'
      >
        СУММА С ДОСТАВКОЙ
      </Text>
      <Text
        fontSize={14}
        fontWeight='medium'
      >
        {price + deliveryPrice}
      </Text>
    </Flex>
  </Box>
);

export default CreateOrderPage;
