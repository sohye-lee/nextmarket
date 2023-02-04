import React from 'react';
import Ad from './ad';
import styles from './styles.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <Ad />
    </header>
  );
}
