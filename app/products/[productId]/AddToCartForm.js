'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { addToCart } from './actions';
import style from './AddToCartForm.module.scss';

export default function AddToCartForm(props) {
  const [quantity, setQuantity] = useState(1);

  const router = useRouter();

  return (
    // Server Actions doesn't need to prevent default
    <form>
      <input
        data-test-id="product-quantity"
        className={style.input}
        type="number"
        min="1"
        value={quantity}
        onChange={(event) => {
          setQuantity(event.currentTarget.value);
        }}
      />

      {/*instead of using onClick we use formAction to perform an action that communicates with the server
      action= server actions are called */}
      <br />

      <button
        className={style.button}
        data-test-id="product-add-to-cart"
        formAction={async () => {
          router.refresh();
          await addToCart(props.productId, quantity);
        }}
      >
        Add to cart
      </button>
    </form>
  );
}
