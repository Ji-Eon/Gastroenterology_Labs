import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import lab_logo from '../../assets/concept/logo2.png';

const AppHeader: React.FC = () => {
  return (
    <div className={styles['header-container']}>
      <div className={styles['logo-container']}>
        <img src={lab_logo} alt="Gastroenterology AI Lab Logo" className={styles.logo} />
      </div>
      <nav className={styles['nav-bar']}>
        <Menu mode="horizontal" className={styles['nav-menu']}>
          <Menu.Item key="home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="research">
            <Link to="/research">Research Member</Link>
          </Menu.Item>
          <Menu.Item key="paper">
            <Link to="/paper">Public Paper</Link>
          </Menu.Item>
          <Menu.Item key="solutions">
            <Link to="/solutions">Solution & Software</Link>
          </Menu.Item>
          <Menu.Item key="news">
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      </nav>
    </div>
  );
};

export default AppHeader;
