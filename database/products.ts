import { cache } from 'react';
import { Product } from '../migrations/1685977994-createTableProducts';
import { sql } from './connect';

// export const products = [
//   { id: 1, name: 'love', description: '', price: 100 },
//   { id: 2, name: 'hug', description: '', price: 100 },
//   { id: 3, name: 'kiss', description: '', price: 100 },
//   { id: 4, name: 'time', description: '', price: 100 },
// ];

// export function getProductById(id: number) {
//   return products.find((product) => product.id === id);
// }

// type Product = {
//   id: number;
//   name: string;
//   description: string;
//   price: number;
// };

export const getProducts = cache(async () => {
  const products = await sql<Product[]>`
  SELECT * FROM products;
  `;
  return products;
});

// export const getProductById = cache(async (id: number) => {
//   const products = await sql<Product[]>`
//   SELECT
//   *
//   FROM
//   products
//   WHERE
//   id = ${id}
//   `;
//   return products[0];
//   // every request in postgres returns an ARRAY, even though your query is just a single DATA,
//   //so we piu index 0 to start at the first element from the array
// });

//array destructuring in JS
//wrap 'products' into an array [] and make it singular so it will pick up the first object in this array
// doing this we dont need to return 'products' with index 0

export const getProductById = cache(async (id: number) => {
  const [product] = await sql<Product[]>`
  SELECT
  *
  FROM
  products
  WHERE
  id = ${id}
  `;
  return product;
});
