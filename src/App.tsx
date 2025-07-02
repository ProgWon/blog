import React, { useState } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./contexts/ThemeContext";
import PostListPage from "./pages/page";
import Header from "./components/Header";
import Banner from "./components/Banner";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  const [currentCategory, setCurrentCategory] = useState("전체");

  const handleCategoryChange = (category: string) => {
    setCurrentCategory(category);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <div className="app-container">
          <Header />
          <Banner />
          <PostListPage
            category={currentCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
