'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export async function addToCart(productId, quantity) {
  // 1. get the current cookie
  // This get the cookies from the Request Headers
  const productQuantityCookie = getCookie('cart');
  // 2. we parse the cookie
  const productQuantities = !productQuantityCookie
    ? // case A: cookie is undefined
      // undefined
      // we need to create the new array with the fruitComment inside
      []
    : parseJson(productQuantityCookie);

  // 3. we edit the object

  // We get the object for the fruit in cookies or undefined
  const productToUpdate = productQuantities.find((productQuantity) => {
    return productQuantity.id === productId;
  });

  // case B: the cookie is defined but have the fruit in the action
  // if we are in fruit 1
  // [{id:1, comment:"abc"}]
  if (productToUpdate) {
    // we need to update the fruitComment
    productToUpdate.quantity =
      Number(productToUpdate.quantity) + Number(quantity);
  } else {
    // case C: the cookie is defined but doesn't have the fruit in the action
    // if we are in fruit 1
    // [{id:2, comment:"abc"}]
    //
    // WARNING: Be careful of using the exclamation mark
    // Only use it if you know that you want the error!
    productQuantities.push({
      // we need insert the fruitComment
      id: productId,
      quantity: Number(quantity),
    });
  }

  // 4. we override the cookie
  // This set the cookies into the Response Headers
  await cookies().set('cart', JSON.stringify(productQuantities));
}
