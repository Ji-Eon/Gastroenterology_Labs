import React from "react";
import Image from "next/image";
import styles from "../styles/YoutubeThumbnail.module.css";

const YoutubeThumbnail = () => {
  // YouTube 채널 데이터 배열을 가정합니다.
  const youtubeChannels = [
    {
      imageUrl: "/images/y_thum_1.png",
      youtubeUrl: "https://www.ytn.co.kr/_ln/0105_202401270436508783",
      title: "YouTube Channel 1",
    },
    {
      imageUrl: "/images/an_logo.png",
      youtubeUrl: "https://youtu.be/0mDhZlBA148",
      title: "YouTube Channel 2",
    },

    {
      imageUrl: "/images/an_logo.png",
      youtubeUrl: "https://youtu.be/0mDhZlBA148",
      title: "YouTube Channel 2",
    },

    {
      imageUrl: "/images/an_logo.png",
      youtubeUrl: "https://youtu.be/0mDhZlBA148",
      title: "YouTube Channel 2",
    },
    // 더 많은 채널 데이터...
  ];

  return (
    <div className={styles.mainContainer}>
      <div className={styles.projectsSection}>
        <h2 className={styles.projectsTitle}>Youtebe</h2>

        <div className={styles.youtubeContainer}>
          {youtubeChannels.map((channel, index) => (
            <a
              key={index}
              href={channel.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.youtubeThumbnailCard}
            >
              <Image
                src={channel.imageUrl}
                alt={channel.title}
                width={320}
                height={180}
                layout="responsive"
              />
              <div className={styles.channelTitle}>
                <p>YouTube Channel 1</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YoutubeThumbnail;
