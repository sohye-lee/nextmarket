import Link from 'next/link';
import styles from './styles.module.scss';

export default function Top() {
  return (
    <div className={styles.top}>
      <div className={styles.top_container}>
        <div>
          <Link href="/">
            <img src="/logo.svg" width="80" alt="logo" />
          </Link>
        </div>
        <input type="search" name="search" />
        <div className={styles.top__list}></div>
      </div>
    </div>
  );
}
