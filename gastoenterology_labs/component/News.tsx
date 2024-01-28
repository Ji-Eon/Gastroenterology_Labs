import React from 'react';
import styles from '../styles/News.module.css';

const NewsSection = () => {
  // 뉴스 데이터 배열을 가정합니다.
  const newsItems = [
    { title: '2023년도 구성원학 연구원 모집', date: '2023-11-18' },
    { title: '2023년도 구성원학 연구원 모집', date: '2023-11-18' },
    { title: '2023년도 구성원학 연구원 모집', date: '2023-11-18' },
    { title: '203년도 구성원학 연구원 모집', date: '2023-11-18' },
    { title: '2023년도 구성원학 연구원 모집', date: '2023-11-18' },
    { title: '2023년도 구성원학 연구원 모집', date: '2023-11-18' },
    { title: '2023년도 구성원학 연구원 모집', date: '2023-11-18' },

    // 추가 뉴스 데이터...
  ];

  return (
    <div className={styles.newsContainer}>
      <h2 className={styles.newsTitle}>News & Notice</h2>
      {newsItems.map((item, index) => (
        <div key={index} className={styles.newsItem}>
          <span>{item.title}</span>
          <span className={styles.newsDate}>{item.date}</span>
        </div>
      ))}
    </div>
  );
};

export default NewsSection;
