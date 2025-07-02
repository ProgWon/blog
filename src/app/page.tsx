"use client";

import { useState } from "react";
import Header from "@/src/components/Header";
import Banner from "@/src/components/Banner";
import Navigation from "@/src/components/Navigation";
import Sidebar from "@/src/components/Sidebar";
import Main from "@/src/feat-components/main/Main";
import { container } from "@/src/styles/tossStyle.css";
import {
  pageLayout,
  mainContentWrapper,
} from "@/src/feat-components/main/Main.css";

export default function Home() {
  const [currentCategory, setCurrentCategory] = useState("전체");

  const handleCategoryChange = (category: string) => {
    setCurrentCategory(category);
  };

  return (
    <>
      <Header />
      <Banner />
      <div className={container}>
        <div className={pageLayout}>
          <div className={mainContentWrapper}>
            <Navigation onCategoryChange={handleCategoryChange} />
            <Main currentCategory={currentCategory} />
          </div>
          <Sidebar />
        </div>
      </div>
    </>
  );
}
