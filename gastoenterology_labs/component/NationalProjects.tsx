import React from 'react';
import Image from 'next/image';
import styles from '../styles/NationalProject.module.css';

const NationalProjects = () => {
  // 프로젝트 데이터 배열을 가정합니다.
  const projects = [
    {
      imageUrl: '/images/logo2.png',
      title: 'National Project 1',
      description: 'Professor Baek Jong-dae\'s research team has been selected...'
    },
    {
      imageUrl: '/images/logo2.png',
      title: 'National Project 2',
      description: 'Han Min-a, a postdoctoral researcher in Professor Baek\'s lab...'
    },
    {
      imageUrl: '/images/logo2.png',
      title: 'National Project 3',
      description: 'The Department of Artificial Intelligence has won three...'
    },
 
    {
      imageUrl: '/images/logo2.png',
      title: 'National Project 3',
      description: 'The Department of Artificial Intelligence has won three...'
    },


    {
      imageUrl: '/images/logo2.png',
      title: 'National Project 3',
      description: 'The Department of Artificial Intelligence has won three...'
    },

    // 더 많은 프로젝트 객체를 추가할 수 있습니다.
  ];

  return (
    <div className={styles.mainContainer}>
      <div className={styles.projectsSection}>
      <h2 className={styles.projectsTitle}>National Project</h2>
      <div className={styles.projectsContainer}>
      
      {projects.map((project, index) => (
        <div key={index} className={styles.projectCard}>
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={450} // 이미지 너비 (적절히 조정해주세요)
            height={150} // 이미지 높이 (적절히 조정해주세요)
            layout="responsive" // 이미지가 컨테이너 크기에 맞게 조정되도록 설정
          />
          <div className={styles.projectInfo}>
            <div className={styles.projectTitle}>{project.title}</div>
            <div className={styles.projectDescription}>{project.description}</div>
          </div>
        </div>
      ))}
    </div>
      </div>
    </div>
   
  );
};

export default NationalProjects;