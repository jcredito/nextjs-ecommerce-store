import { Sql } from 'postgres';
import ProductsPage from '../app/products/page';

export const products = [
  { id: 1, name: 'love', description: '', price: 50 },
  { id: 2, name: 'hug', description: '', price: 100 },
  { id: 3, name: 'kiss', description: '', price: 150 },
  { id: 4, name: 'time', description: '', price: 200 },
];

export async function up(sql: Sql) {
  for (const product of products) {
    await sql`
  INSERT INTO products
     (name, description, price)
     VALUES
      (${product.name}, ${product.description}, ${product.price})
  `;
  }
}

export async function down(sql: Sql) {
  for (const product of products) {
    await sql`
  DELETE
  FROM
  products
  WHERE id = ${product.id}
  `;
  }
}
