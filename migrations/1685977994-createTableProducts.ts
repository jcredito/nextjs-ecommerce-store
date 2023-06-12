//importing the type
import { Sql } from 'postgres';

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
};

//create a table
export async function up(sql: Sql) {
  await sql`
    CREATE TABLE products (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      name varchar(40) NOT NULL,
      description varchar(500) NOT NULL,
      price integer NOT NULL

    )
`;
}

//will undo the function above
export async function down(sql: Sql) {
  await sql`
  DROP TABLE products
  `;
}
