"use client";

import React, { useState, useEffect } from "react";
import * as styles from "./Header.css";

// 타입 오류 해결을 위한 타입 정의
interface StylesType {
  header: string;
  container: string;
  headerContent: string;
  logoArea: string;
  logo: string;
  headerShadow?: string;
  headerBorder: string;
}

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  // 스크롤 이벤트 감지
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // 타입 캐스팅으로 오류 해결
  const typedStyles = styles as unknown as StylesType;

  return (
    <>
      <header
        className={`${typedStyles.header} ${
          scrolled ? typedStyles.headerShadow : ""
        }`}
      >
        <div className={typedStyles.container}>
          <div className={typedStyles.headerContent}>
            <div className={typedStyles.logoArea}>
              <h1 className={typedStyles.logo}>
                <a
                  href="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  WONJAE TECH
                </a>
              </h1>
            </div>
          </div>
        </div>
      </header>
      {scrolled && <div className={typedStyles.headerBorder} />}
    </>
  );
};

export default Header;
