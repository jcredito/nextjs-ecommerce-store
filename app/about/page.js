import styles from './about.module.scss';

export default function AboutPage() {
  return (
    <div>
      <header>
        <title>About | Your 'Nowhere Else' E-Commerce Web App</title>
      </header>
      <div className={styles.aboutContainer}>
        <h1 className={styles.h1}>About Us</h1>
        <p className={styles.p}>
          Welcome to Your 'Nowhere Else' E Commerce Web App!
        </p>
        <p className={styles.p}>
          We are dedicated to providing you with the best selection of products
          centered around love, kisses, hugs, and time.
        </p>
        <p className={styles.p}>
          At Your 'Nowhere Else' E-Commerce Web App, we believe that love is a
          universal language and that every moment matters. That's why we have
          curated a collection of products that symbolize affection, warmth, and
          the value of time.
        </p>
        <p className={styles.p}>
          Whether you're looking for a heartfelt gift or a way to cherish
          memorable moments, we've got you covered. Our team is committed to
          ensuring a seamless shopping experience and delivering high-quality
          products that bring joy and love into your life.
        </p>
        <p className={styles.p}>
          Thank you for choosing Your 'Nowhere Else' E-Commerce Web App. Spread
          love, share kisses, give hugs, and make the most of every moment!
        </p>
      </div>
    </div>
  );
}
