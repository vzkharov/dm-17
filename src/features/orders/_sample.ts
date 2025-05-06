import type { Order } from '~/entities/order';

const initialOrders: Order[] = [
  {
    id: 1,
    customer: {
      id: 1,
      name: 'ООО АТРИ',
      address: 'г. Москва, ул. Макаёнка, 20',
      phone: '71332562563',
    },
    status: 'created',
    contactPhone: '71332562563',
    shipment: {
      address: {
        country: 'Россия',
        region: 'Московская область',
        city: 'Москва',
        street: 'Макаёнка',
        house: '20',

        coordinates: {
          lat: 55.7558,
          lon: 37.6176,
        },
      },
      price: 200,
      deliveryDate: '2023-06-21T14:37:34.889Z',
    },
    products: [
      {
        name: 'Товар 1',
        price: 2500,
        quantity: 3,
        article: '1234567890',
      },
    ],
    createdAt: '2023-01-01',
    updatedAt: '2023-01-01',
  },
  {
    id: 2,
    customer: {
      id: 2,
      name: 'ООО БЕЛПРОМ',
      address: 'г. Москва, ул. Пушкина, 220',
      phone: '71332562563',
    },
    status: 'completed',
    contactPhone: '71332562563',
    shipment: {
      address: {
        country: 'Россия',
        region: 'Московская область',
        city: 'Москва',
        street: 'Пушкина',
        house: '220',

        coordinates: {
          lat: 55.7558,
          lon: 37.6176,
        },
      },
      price: 100,
      deliveryDate: '2023-03-20T14:37:34.889Z',
    },
    comment: '45874521',
    products: [
      {
        name: 'Товар 1',
        price: 2500,
        quantity: 3,
        article: '1234567890',
      },
    ],
    createdAt: '2023-01-01',
    updatedAt: '2023-01-01',
  },
  {
    id: 3,
    customer: {
      id: 3,
      name: 'ООО АТРИ',
      address: 'г. Москва, ул. Макаёнка, 20',
      phone: '71332562563',
    },
    status: 'created',
    contactPhone: '71332562563',
    shipment: {
      address: {
        country: 'Россия',
        region: 'Московская область',
        city: 'Москва',
        street: 'Макаёнка',
        house: '20',

        coordinates: {
          lat: 55.7558,
          lon: 37.6176,
        },
      },
      price: 200,
      deliveryDate: '2023-06-21T14:37:34.889Z',
    },
    products: [
      {
        name: 'Товар 1',
        price: 2500,
        quantity: 3,
        article: '1234567890',
      },
    ],
    createdAt: '2023-01-01',
    updatedAt: '2023-01-01',
    comment: 'вход со двора',
  },
  {
    id: 4,
    customer: {
      id: 4,
      name: 'ОАО Петрович',
      address: 'г. Москва, ул. Пушкина, 220',
      phone: '71332562563',
    },
    contactPhone: '71332562563',
    status: 'completed',
    shipment: {
      address: {
        country: 'Россия',
        region: 'Московская область',
        city: 'Москва',
        street: 'Пушкина',
        house: '220',

        coordinates: {
          lat: 55.7558,
          lon: 37.6176,
        },
      },
      price: 100,
      deliveryDate: '2023-03-20T14:37:34.889Z',
    },
    products: [
      {
        name: 'Товар 1',
        price: 2500,
        quantity: 3,
        article: '1234567890',
      },
    ],
    createdAt: '2023-01-01',
    updatedAt: '2023-01-01',
  },
  {
    id: 5,
    customer: {
      id: 5,
      name: 'ИП Иванов',
      address: 'г. Москва, ул. Пушкина, 220',
      phone: '71332562563',
    },
    contactPhone: '71332562563',
    status: 'cancelled',
    shipment: {
      address: {
        country: 'Россия',
        region: 'Московская область',
        city: 'Москва',
        street: 'Пушкина',
        house: '220',

        coordinates: {
          lat: 55.7558,
          lon: 37.6176,
        },
      },
      price: 100,
      deliveryDate: '2023-03-20T14:37:34.889Z',
    },
    products: [
      {
        name: 'Товар 1',
        price: 2500,
        quantity: 3,
        article: '1234567890',
      },
    ],
    comment: '7 товаров',
    createdAt: '2023-01-01',
    updatedAt: '2023-01-01',
  },
];

export { initialOrders };
