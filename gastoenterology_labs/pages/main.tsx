import React, { useState } from 'react';
import { useRouter } from 'next/router';

import styles from '../styles/Main.module.css';

import Footer from '../component/footer';
import TopNavBar from '../component/TopNav';
import Researcher from '../component/researcher';
import NationalProjects from '../component/NationalProjects';
import YoutubeThumbnail from '../component/YoutubeThumbnail';

const main = () => {

  
  return (
    <div className={styles.mainContainer}>
    <TopNavBar />
    <div className={styles.content}>
      <Researcher />
      <NationalProjects />

      <YoutubeThumbnail /> {/* 이 부분은 필요에 따라 조정해야 합니다. */}

    </div>
    <div >
      <Footer/>
</div>
  </div>
  );
};


export default main;