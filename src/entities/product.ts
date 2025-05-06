type Product = {
  name: string;
  price: number;
  article: string;
};

type ProductCart = Product & {
  quantity: number;
};

type ProductOrder = ProductCart & {
  description?: string;
};

export type { Product, ProductCart, ProductOrder };
