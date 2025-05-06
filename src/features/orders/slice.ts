import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { Order, CreateOrder, UpdateOrder } from '~/entities/order';

import { initialOrders } from './_sample';

interface OrdersState {
  items: Order[];
}

const initialState = { items: initialOrders } satisfies OrdersState as OrdersState;

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<CreateOrder>) => {
      state.items.push({
        id: state.items.length + 1,
        status: 'created',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        ...action.payload,
      });
    },
    updateOrder: (state, action: PayloadAction<UpdateOrder>) => {
      const order = state.items.find((order) => order.id === action.payload.id);

      if (order) {
        order.status = action.payload.status;
        order.updatedAt = new Date().toISOString();
      }
    },
  },
});

export { ordersSlice };
export type { OrdersState };
