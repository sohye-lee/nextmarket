import Link from 'next/link';
import styles from './styles.module.scss';

export default function Ad() {
  return (
    <div className={styles.ad}>
      Shop wholesale online from over 85,000 brands.
      <Link href="/register">Sign up</Link>.
    </div>
  );
}
