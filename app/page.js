//import Image from 'next/image';

import styles from './page.module.scss';

export const metadata = {
  description: 'This is my Home Page',
};

export default function HomePage() {
  return (
    <div>
      <div className={styles.container}>
        <h3 className={styles.message}>WELCOME TO THE HOMEPAGE</h3>
        <img
          src="https://burst.shopifycdn.com/photos/love-letters-and-hearts.jpg?width=1200&format=pjpg&exif=1&iptc=1"
          className={styles.image}
          alt="love"
        />
      </div>
    </div>
  );
}
