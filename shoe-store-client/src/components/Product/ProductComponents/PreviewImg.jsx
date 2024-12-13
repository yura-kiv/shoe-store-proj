import { React, useEffect, useRef, useState } from 'react';
import styles from './styles/PreviewImg.module.scss';
import { Link, useParams } from 'react-router-dom';

const PreviewImg = ({ imgsList, activePreviewImg, activeColor, id }) => {
  const carousellElementRef = useRef();
  const params = useParams();
  // const [resizeWindow, setResizeWindow] = useState(window.innerWidth);
  const setPreviewImg = () => {
    let number;
    const height = carousellElementRef.current.clientHeight;
    for (let i in imgsList) {
      if (imgsList[i] === activePreviewImg) number = i;
    }
    carousellElementRef.current.style.transform = `translateY(${
      -number * height
    }px)`;
  };

  useEffect(() => {
    setPreviewImg();
  }, [activePreviewImg]);

  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     console.log("resize");
  //     setResizeWindow(window.innerWidth);
  //   });
  // }, []);

  return (
    <div className={styles.previewImgMainWrapper}>
      <div
        ref={carousellElementRef}
        className={styles.carousellImgsWrapper}
      >
        {imgsList.map((img) => {
          return (
            <div
              key={img}
              className={styles.previewImgWrapper}
            >
              <Link to={`/shoes/${params.type}/${id}/${activeColor}/`}>
                <img
                  className={styles.previewImg}
                  src={`http://localhost:3000/img/${img}`}
                ></img>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PreviewImg;
