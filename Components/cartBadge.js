import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export default function CartBadge() {
  const productQuantityCookie = getCookie('cart');
  const productQuantities = !productQuantityCookie
    ? []
    : parseJson(productQuantityCookie);

  const quantity = productQuantities.map((item) => item.quantity);
  // console.log(quantity);
  const total = quantity.reduce(
    (accumulator, currentNumber) => accumulator + currentNumber,
    0,
  );
  return <h5>{total}</h5>;
}
