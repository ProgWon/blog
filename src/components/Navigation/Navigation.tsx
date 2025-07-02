"use client";

import React, { useState } from "react";
import * as styles from "./Navigation.css";

// 타입 정의
interface StylesType {
  navigationContainer: string;
  navigationWrapper: string;
  menuList: string;
  menuItem: (options?: { active?: boolean }) => string;
}

interface NavigationProps {
  onCategoryChange?: (category: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onCategoryChange }) => {
  const [activeCategory, setActiveCategory] = useState("전체");

  // 타입 캐스팅
  const typedStyles = styles as unknown as StylesType;

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    if (onCategoryChange) {
      onCategoryChange(category);
    }
  };

  return (
    <nav className={typedStyles.navigationContainer}>
      <div className={typedStyles.navigationWrapper}>
        <ul className={typedStyles.menuList}>
          <li>
            <a
              href="#"
              className={typedStyles.menuItem({
                active: activeCategory === "전체",
              })}
              onClick={(e) => {
                e.preventDefault();
                handleCategoryClick("전체");
              }}
            >
              전체
            </a>
          </li>
          <li>
            <a
              href="#"
              className={typedStyles.menuItem({
                active: activeCategory === "개발",
              })}
              onClick={(e) => {
                e.preventDefault();
                handleCategoryClick("개발");
              }}
            >
              개발
            </a>
          </li>
          <li>
            <a
              href="#"
              className={typedStyles.menuItem({
                active: activeCategory === "데이터/ML",
              })}
              onClick={(e) => {
                e.preventDefault();
                handleCategoryClick("데이터/ML");
              }}
            >
              데이터/ML
            </a>
          </li>
          <li>
            <a
              href="#"
              className={typedStyles.menuItem({
                active: activeCategory === "디자인",
              })}
              onClick={(e) => {
                e.preventDefault();
                handleCategoryClick("디자인");
              }}
            >
              디자인
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
