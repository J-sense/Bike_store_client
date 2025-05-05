export type TUSer = {
  email: string;
  exp: number;
  iat: number;
  role: string;
};

export type TProduct = {
  image: string;
  brand: string;
  category: string;
  description: string;
  inStock: boolean;
  name: string;
  price: number;
  quantity: number;
  __v: number;
  _id: string;
};
