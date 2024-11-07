import React from 'react';
import styles from './DashboardPage.module.scss';
import thumnail from '../../assets/concept/y_thum_1.png';
import thumnail2 from '../../assets/concept/an_logo.png';
import Notice from '../Notice/NoticeComponent';
import classNames from 'classnames/bind'
import { LOGOS } from '../../consts/imageConsts';

const cx = classNames.bind(styles)

const DashboardPage: React.FC = () => {
  return (
    <div className={cx('dashboard')}>
      {/* 학력 및 경력 섹션 */}

      <div className={cx('columnSection')}>
      <div className={cx('profileSection')}>
      <h2>학력</h2>
        <ul>
          <li>윤지대학교 대학원 의학박사 (내과학)</li>
          <li>윤지대학교 대학원 의학석사 (내과학)</li>
          <li>충남대학교 의과대학 학사</li>
        </ul>
        <h2>경력 및 연수</h2>
        <ul>
          <li>(현) 중앙대학교병원 호흡기알레르기내과 임상부교수</li>
          <li>윤산의과대학 호흡기알레르기내과 부교수</li>
          <li>서울아산병원 임상강사</li>
          <li>윤지대학교병원 임상강사</li>
          <li>건양대학교병원 임상강사</li>
          <li>윤지대학교병원 내과 레지던트</li>
          <li>윤지대학교병원 인턴</li>
        </ul>
      </div>
      <div className={cx('noticeSection')}>
        <Notice />
      </div>
      </div>

      {/* National Project 섹션 */}
      <div className={cx('projectSection')}>
        <h2>National Project</h2>
        <div className={styles.projectCards}>
          {Array(6).fill(null).map((_, index) => (
            <div key={index} className={styles.projectCard}>
              <img src={LOGOS.PROJECT_LOGO1} alt="Project Logo" />
              <p>National Project {index + 1} Description...</p>
            </div>
          ))}
        </div>
      </div>

      {/* YouTube 섹션 */}
      <div className={cx('youtubeSection')}>
        <h2>YouTube</h2>
        <div className={styles.youtubeVideos}>
        <div className={styles.youtubeCard}>
            <img src={thumnail2} alt="YouTube Thumbnail" />
          </div>
          {Array(3).fill(null).map((_, index) => (
            <div key={index} className={cx('youtubeCard')}>
              <img src={thumnail} alt="YouTube Thumbnail" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
