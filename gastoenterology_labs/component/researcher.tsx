import React from "react";
import Image from "next/image";
import styles from "../styles/Researcher.module.css";

import NewsSection from "./News";

const Researcher = () => {
  return (
    <div className={styles.cardsContainer}>
      <div className={styles.profileCard}>
        <div className={styles.profileImage}>
          <Image
            src="/images/moon.png"
            alt="Professor Moon Kyung Min"
            width={180}
            height={180}
            layout="fixed" // This may be necessary for a flex layout
          />
        </div>
        <div className={styles.info}>
          <h2>학력</h2>
          <p className={styles.carrer_font}>
            을지대학교 대학원 의학박사 (내과학)
          </p>
          <p className={styles.carrer_font}>
            을지대학교 대학원 의학석사 (내과학)
          </p>
          <p className={styles.carrer_font}>충남대학교 의과대학 학사</p>
        </div>

        <div className={styles.info_2}>
          <h2> 경력 및 연수</h2>
          <p className={styles.carrer_font}>
            (현) 중앙대학교병원 호흡기알레르기내과 임상부교수
          </p>
          <p className={styles.carrer_font}>
            울산의과대학 호흡기알레르기내과 부교수
          </p>
          <p className={styles.carrer_font}>서울아산병원 임상강사</p>
          <p className={styles.carrer_font}>을지대학병원 임상강사</p>
          <p className={styles.carrer_font}>건양대학병원 임상강사</p>
          <p className={styles.carrer_font}>을지대학병원 내과 레지던트</p>
          <p className={styles.carrer_font}>을지대학병원 인턴</p>
        </div>
      </div>
      <div className={styles.cardsContainer}>
        <NewsSection />
      </div>
    </div>
  );
};

export default Researcher;
