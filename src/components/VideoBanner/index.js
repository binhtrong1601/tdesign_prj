import React, { useRef, useState } from 'react';
import styles from './VideoBanner.module.css';
import urlDesign1 from '../../imgs/design-3.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const VideoBanner = () => {
  const videoRef = useRef(null);
  const [watch, setWatch] = useState(false);
  const [play, setPlay] = useState(true);

  const handlePlayVideo = () => {
    if (!videoRef?.current) return;
    videoRef.current.play();

    setWatch(true);
    setPlay(false);
  };

  return (
    <div className={styles.video_banner}>
      <div className={styles.video_container}>
        <video className={styles.video} ref={videoRef} controls={watch}>
          <source src={urlDesign1} type="video/mp4" />
        </video>
        {play === true ? (
          <div className="container">
            <button className={styles.watch} onClick={handlePlayVideo}>
              <p>Watch</p>
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default VideoBanner;
