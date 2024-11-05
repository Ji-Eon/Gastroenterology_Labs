import React from 'react';
import { Layout, Menu } from 'antd';
import styles from './Header.module.scss'; // 제대로 된 경로로 SCSS 모듈 가져오기
import logo from '../../assets/concept/logo2.png'; // 로고 이미지 경로

const AppHeader: React.FC = () => {
  return (
    <div>
      <div className={styles['logo-container']}>
        <img src={logo} alt="Gastroenterology AI Lab Logo" className={styles.logo} />
      </div>
      <div>
      <nav className={styles['nav-bar']}> {/* styles 객체를 사용해 클래스 적용 */}
        <Menu mode="horizontal" className={styles['nav-menu']}> {/* styles 객체를 사용 */}
          <Menu.Item key="home">Home</Menu.Item>
          <Menu.Item key="research">Research Member</Menu.Item>
          <Menu.Item key="paper">Public Paper</Menu.Item>
          <Menu.Item key="solutions">Solution & Software</Menu.Item>
          <Menu.Item key="news">News</Menu.Item>
        </Menu>
      </nav>
      </div>
    </div>
  );
};

export default AppHeader;
