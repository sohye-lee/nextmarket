import Link from 'next/link';
import styles from './styles.module.scss';
import { IoIosSearch } from 'react-icons/io';

export default function Top() {
  return (
    <div className={styles.top}>
      <div className={styles.top_container}>
        <div className={styles.logo}>
          <Link href="/">
            <img src="/logo.svg" width="80" alt="logo" />
          </Link>
        </div>
        <div className={styles.input__group}>
          <input type="search" name="search" />
          <button type="submit">
            <IoIosSearch name="search" width={80} height={80} size={24} />
          </button>
        </div>
        <div className={styles.top__list}>
          <Link href="">Sell on Kloe</Link>
          <Link href="">Sign In</Link>
          <Link href="/register" className={styles.top__button}>
            Sign Up to Shop
          </Link>
        </div>
      </div>
    </div>
  );
}
