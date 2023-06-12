-- Create products table
CREATE TABLE products (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(40) NOT NULL,
  description varchar(500) NOT NULL,
  price integer NOT NULL

);
-- NOT NULL means REQUIRED
-- Insert product
INSERT INTO products
(name, description, price)
VALUES
   ( 'love', '', 50 ),
   ( 'hug', '', 100 ),
   ( 'kiss', '', 150 ),
   ( 'time', '', 200);

-- read products
SELECT * FROM products;
