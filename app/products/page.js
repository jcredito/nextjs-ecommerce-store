import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products.ts';
import styles from './products.module.scss';

export const metadata = {
  title: 'Your Nowhere Else E-Commerce Web App',
  description: 'List of products we are selling',
};

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <main>
      <h1 className={styles.h1}>Our Products</h1>

      <div className={styles.productsContainer}>
        {products.map((product) => {
          return (
            <div
              key={`product-div-${product.id}`}
              className={styles.imagesContainer}
            >
              <Link href={`/products/${product.id}`}>{product.name}</Link>
              <br />
              <Image
                src={`/images/${product.name}.jpg`}
                width={150}
                height={150}
              />
            </div>
          );
        })}
      </div>
    </main>
  );
}
