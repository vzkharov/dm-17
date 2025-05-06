import { formatDate } from '~/utils/date';
import { formatPhone } from '~/utils/phone';
import { formatPrice } from '~/utils/currency';
import { constructAddress } from '~/utils/address';

import { OrderStatusBadge } from '~/components/order-status-badge';
import { OrderActionsCell } from './components/order-actions-cell';

import type { CellConfig } from './types';

const CELLS_CONFIG_MAP = {
  id: {
    key: 'id',
    label: '№',
    width: 50,
    render: (value) => value.id,
  },
  customer: {
    key: 'customer',
    label: 'КЛИЕНТ',
    width: 160,
    render: (value) => value.customer.name,
  },
  phone: {
    key: 'phone',
    label: 'НОМЕР ТЕЛЕФОНА',
    width: 200,
    render: (value) => formatPhone(value.contactPhone ?? value.customer.phone),
  },
  status: {
    key: 'status',
    label: 'СТАТУС',
    width: 120,
    render: (value) => <OrderStatusBadge status={value.status} />,
  },
  deliveryDate: {
    key: 'deliveryDate',
    label: 'ДАТА ДОСТАВКИ',
    width: 160,
    render: (value) => formatDate(value.shipment.deliveryDate),
  },
  address: {
    key: 'address',
    label: 'АДРЕС ДОСТАВКИ',
    width: 240,
    render: (value) => constructAddress(value.shipment.address),
  },
  quantity: {
    key: 'quantity',
    label: 'КОЛ-ВО',
    width: 100,
    render: (value) => value.quantity,
  },
  cartPrice: {
    key: 'cartPrice',
    label: 'СТОИМОСТЬ ТОВАРОВ (RUB)',
    width: 150,
    render: (value) => formatPrice(value.price.cart),
  },
  deliveryPrice: {
    key: 'deliveryPrice',
    label: 'СТОИМОСТЬ ДОСТАВКИ (RUB)',
    width: 150,
    render: (value) => formatPrice(value.price.delivery),
  },
  totalPrice: {
    key: 'totalPrice',
    label: 'СТОИМОСТЬ ИТОГО (RUB)',
    width: 150,
    render: (value) => formatPrice(value.price.total),
  },
  comment: {
    key: 'comment',
    label: 'КОММЕНТАРИЙ',
    width: 150,
    render: (value) => value.comment,
  },
  actions: {
    key: 'actions',
    label: 'ДЕЙСТВИЯ',
    width: 120,
    sticky: true,
    cellBackground: 'background',
    headerBackground: 'gray.100',
    render: (value) => (value.status === 'created' ? <OrderActionsCell orderId={value.id} /> : null),
  },
} satisfies Record<string, CellConfig>;

const CELLS_CONFIG: CellConfig[] = Object.values(CELLS_CONFIG_MAP);

export { CELLS_CONFIG, CELLS_CONFIG_MAP };
