import React from 'react';
import { Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import styles from '../styles/TopNav.module.css';
import Image from 'next/image';

const TopNavBar = () => {
  return (
    <div className={styles.navContainer}>
 
    <Nav className={styles.nav}>
    <Image
      src="/images/logo2.png" // public 폴더 내의 이미지 경로
      alt="Logo"
      width={250} // 너비 설정
      height={1000} // 높이 설정
      className={styles.logo} // 필요하다면 로고에 대한 스타일을 적용할 수 있습니다
    />
      <Nav.Item icon={<HomeIcon />} className={styles.navItem}>Home</Nav.Item>
      <Nav.Item className={styles.navItem}>Research Member</Nav.Item>
      <Nav.Item className={styles.navItem}>Public Paper</Nav.Item>
      <Nav.Item className={styles.navItem}>Solution & Software</Nav.Item>
      <Nav.Item className={styles.navItem}>News</Nav.Item>
    </Nav>
  </div>
);
};

export default TopNavBar;
