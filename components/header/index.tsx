import React from 'react';
import Ad from './ad';
import styles from './styles.module.scss';
import Top from './top';

export default function Header() {
  return (
    <header className={styles.header}>
      <Ad />
      <Top />
    </header>
  );
}
