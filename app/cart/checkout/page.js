import styles from './checkout.module.scss';

export default function CheckoutPage() {
  return (
    <div className={styles.checkoutContainer}>
      <div className={styles.infoSection}>
        <form>
          <p>Contact Information</p>
          <div className={styles.nameContainer}>
            <label>
              <input
                data-test-id="checkout-first-name"
                placeholder="First name"
                className={styles.name}
              />
            </label>
            <label>
              <input
                data-test-id="checkout-last-name"
                placeholder="Last name"
                className={styles.name}
              />
            </label>
          </div>
          <label>
            <input
              type="email"
              data-test-id="checkout-email"
              placeholder="example@email.com"
            />
          </label>

          <div>
            <p>Shipping Information</p>

            <label>
              <input data-test-id="checkout-address" placeholder="Address" />
            </label>

            <div className={styles.addressContainer}>
              <label>
                <input
                  data-test-id="checkout-city"
                  placeholder="City"
                  className={styles.city}
                />
              </label>
              <label>
                <input
                  data-test-id="checkout-postal-code"
                  placeholder="Post Code"
                  className={styles.city}
                />
              </label>
            </div>
            <label>
              <input data-test-id="checkout-country" placeholder="Country" />
            </label>
          </div>

          <div>
            <p>Payment Information</p>
            <label>
              <input
                data-test-id="checkout-credit-card"
                placeholder="Credit Card Number"
              />
            </label>
            <div className={styles.paymentInfo}>
              <label>
                <input
                  type="date"
                  data-test-id="checkout-expiration-date"
                  className={styles.card}
                />
              </label>

              <label>
                <input
                  data-test-id="checkout-security-code"
                  className={styles.card}
                />
              </label>
            </div>
          </div>
          <button data-test-id="checkout-confirm-order" href="/thankYou">
            Confirm Order
          </button>
        </form>
      </div>

      <div className={styles.totalSection} />
    </div>
  );
}
