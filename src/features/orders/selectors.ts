import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '~/lib/store';
import type { ProductOrder } from '~/entities/product';

import type { OrdersState } from './slice';

const selectOrders = (state: RootState): OrdersState => state.orders;

const selectOrderById = createSelector([selectOrders, (_: RootState, id: number) => id], (orders, id) =>
  orders.items.find((order) => order.id === id)
);

const selectOrderTableDataById = createSelector([selectOrderById], (order) => {
  if (!order) {
    return;
  }

  const quantity = order.products.reduce((acc: number, product: ProductOrder) => acc + product.quantity, 0);
  const cartPrice = order.products.reduce((acc: number, product: ProductOrder) => acc + product.price, 0);

  const deliveryPrice = order.shipment.price;
  const totalPrice = cartPrice + deliveryPrice;

  return {
    ...order,
    quantity,
    price: {
      total: totalPrice,
      cart: cartPrice,
      delivery: deliveryPrice,
    },
  };
});

export { selectOrders, selectOrderById, selectOrderTableDataById };
