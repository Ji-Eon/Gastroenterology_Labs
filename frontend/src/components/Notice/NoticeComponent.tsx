import React from 'react';
import styles from './Notice.module.scss';
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const Notice = () => {
  const newsData = [
    { title: '2023년도 구성원학 연구원 모집', date: '2023-11-18', author: '관리자' },
    { title: '2023년도 구성원학 연구원 모집', date: '2023-11-18', author: '관리자' },
    { title: '2023년도 구성원학 연구원 모집', date: '2023-11-18', author: '관리자' },
    { title: '2023년도 구성원학 연구원 모집', date: '2023-11-18', author: '관리자' },
    { title: '2023년도 구성원학 연구원 모집', date: '2023-11-18', author: '관리자' },
    { title: '2023년도 구성원학 연구원 모집', date: '2023-11-18', author: '관리자' },
    { title: '2023년도 구성원학 연구원 모집', date: '2023-11-18', author: '관리자' },
    { title: '2023년도 구성원학 연구원 모집', date: '2023-11-18', author: '관리자' },
    { title: '2023년도 구성원학 연구원 모집', date: '2023-11-18', author: '관리자' },

  ];

  return (
    <div className={cx('newsSection')}>
      <h2>News & Notice</h2>
      <table className={cx('newsTable')}>
        <thead>
          <tr>
            <th>제목</th>
            <th>날짜</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {newsData.map((news, index) => (
            <tr key={index}>
              <td>{news.title}</td>
              <td>{news.date}</td>
              <td>{news.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Notice;
