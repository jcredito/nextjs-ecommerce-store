import './globals.scss';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { CookieBanner } from '../Components/CookieBanner.js';
import styles from './header.module.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Products Layout',
  description: 'Different products',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CookieBanner />
        <header data-test-id="products-link" className={styles.container}>
          <nav className="navbar">
            <div className={styles.navbar}>
              <Link href="/">Home</Link>
              <Link href="/products">Products</Link>{' '}
              <Link href="/about">About</Link>
              <Link href="/cart">🛒 Cart</Link>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
