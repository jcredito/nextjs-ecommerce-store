import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById, getProducts } from '../../../database/products';
import AddToCartForm from './AddToCartForm';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

//metadata??

type Props = {
  params: { productId: string };
};

// export type CookieQuantityItem = {
//   id: number;
//   quantity?: number;
// };

export default async function SingleProductPage(props: Props) {
  const singleProduct = await getProductById(Number(props.params.productId));
  // const products = await getProducts();
  console.log({ singleProduct });

  // this call the notFound function if it does not find the product page

  if (!singleProduct) {
    notFound();
  }

  return (
    <main>
      <section className={styles.container}>
        <div>
          <Image
            data-test-id="product-image"
            src={`/images/${singleProduct.name}.jpg`}
            width={250}
            height={250}
            className={styles.image}
            alt=""
          />
        </div>

        {
          // here i have to put the description//
          //<AddToCart />
        }
        <div className={styles.infoContainer}>
          <h1>{singleProduct.name}</h1>
          {
            //<h5>{singleProduct.description}</h5>
          }
          <h6 data-test-id="product-price"> {singleProduct.price}</h6>
          <p>Quantity:</p>
          <div>
            <AddToCartForm productId={singleProduct.id} />
          </div>
        </div>
      </section>
    </main>
  );
}
