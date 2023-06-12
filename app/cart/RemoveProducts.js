'use client';
import { useRouter } from 'next/navigation';
import { removeItem } from './actions';

//import styles from './cart.module.scss';

export default function RemoveItems({ product }) {
  const router = useRouter();

  return (
    <div className={styles.removeButton}>
      <button
        formAction={async () => {
          router.refresh();
          await removeItem(product);
        }}
      ></button>
    </div>
  );
}
