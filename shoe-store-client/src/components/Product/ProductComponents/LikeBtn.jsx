import { React, useRef, useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import heart from '../../../assets/heartLike.json';
import styles from './styles/LikeBtn.module.scss';

const LikeBtn = ({ isLiked, setIsLiked }) => {
  const animationDuration = 41;
  const lottieRef = useRef();
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    if (isFirstLoad) {
      if (isLiked) {
        lottieRef.current.goToAndStop(animationDuration, true);
      } else {
        lottieRef.current.goToAndStop(0, true);
      }
    } else {
      if (isLiked) {
        lottieRef.current.playSegments([0, animationDuration], true);
      } else {
        lottieRef.current.playSegments([animationDuration, 0], true);
      }
    }
    setIsFirstLoad(false);
  }, [isLiked]);

  return (
    <div
      onClick={() => setIsLiked(!isLiked)}
      className={styles.likeBtn}
    >
      <Lottie
        lottieRef={lottieRef}
        className={styles.heartLottie}
        animationData={heart}
        loop={false}
        autoplay={false}
      ></Lottie>
    </div>
  );
};

export default LikeBtn;
