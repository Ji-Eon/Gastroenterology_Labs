// components/Header.js
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      {/* <div className={styles.logoContainer}>
        <Image
        src="/images/login_logo.png" // public 폴더 내의 이미지 경로
        alt="Logo"
          width={250} // 적절한 크기로 조절
          height={45}
        />
      </div> */}
      <div className={styles.horizontal_container}>
      <span className={styles.title}>CONNEVO</span>
      <span className={styles.title_color}>KOA</span>
      <span className={styles.title}> - Configuration Manager</span>

      </div>
      <div className={styles.userContainer}>
        <span>Welcome, Admin!</span>
        <div className={styles.userIcon}></div> {/* 아이콘을 배치할 컨테이너 */}
      </div>
    </header>
  );
};

export default Header;
