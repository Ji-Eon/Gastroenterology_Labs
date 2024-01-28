import React from 'react';
import Image from 'next/image';
import styles from '../styles/Researcher.module.css';

import NewsSection from './News';

const Researcher = () => {
    return (
        <div className={styles.cardsContainer}>
            <div className={styles.profileCard}>
                <Image className={styles.profileImage} src="/images/moon.png"
                    // 이미지 파일 경로
                    alt="Professor Dong-hyun Kim" width={180}
                    // 이미지의 너비
                    height={180}
                    // 이미지의 높이
                />
                <div className={styles.info}>
                    <h2>Professor</h2>
                    <p>Name: Dong-hyun Kim</p>
                    <p>Address: 50, Yonsei-ro, Seodaemun-gu, Seoul, Republic of Korea</p>
                    <p>Address: 50, Yonsei-ro, Seodaemun-gu, Seoul, Republic of Korea</p>
                    <p>Address: 50, Yonsei-ro, Seodaemun-gu, Seoul, Republic of Korea</p>
                    <p>Address: 50, Yonsei-ro, Seodaemun-gu, Seoul, Republic of Korea</p>

                </div>

            </div>
            <div className={styles.cardsContainer}>
                <NewsSection/>

            </div>

        </div>
    );
};

export default Researcher;
