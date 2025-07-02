import React from "react";
import * as styles from "./Banner.css";

// 타입 정의
interface StylesType {
  bannerContainer: string;
  bannerWrapper: string;
  bannerImage: string;
}

const Banner = () => {
  // 타입 캐스팅
  const typedStyles = styles as unknown as StylesType;

  return (
    <div className={typedStyles.bannerContainer}>
      <div className={typedStyles.bannerWrapper}>
        <img
          src="https://resources-fe.toss.im/image-optimize/width=3840,quality=75/https%3A%2F%2Fstatic.toss.im%2Fassets%2Fpayments%2Fcontents%2Ftoss-tech-banner2_.png"
          alt="wonjae tech banner"
          className={typedStyles.bannerImage}
        />
      </div>
    </div>
  );
};

export default Banner;
