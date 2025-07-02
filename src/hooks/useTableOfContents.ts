import { useEffect, useState } from "react";

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export const useTableOfContents = () => {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // 헤딩 요소들을 찾아서 목차 생성
    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    const tocItems: TocItem[] = [];

    headings.forEach((heading, index) => {
      const text = heading.textContent || "";
      const level = parseInt(heading.tagName.charAt(1));

      // ID가 없으면 생성
      if (!heading.id) {
        const id = `heading-${index}`;
        heading.id = id;
      }

      tocItems.push({
        id: heading.id,
        text,
        level,
      });
    });

    setToc(tocItems);
  }, []);

  useEffect(() => {
    // 스크롤 이벤트 리스너로 현재 활성 섹션 추적
    const handleScroll = () => {
      const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
      let currentActiveId = "";

      headings.forEach((heading) => {
        const rect = heading.getBoundingClientRect();
        if (rect.top <= 100) {
          currentActiveId = heading.id;
        }
      });

      setActiveId(currentActiveId);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 실행

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [toc]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // 헤더 높이만큼 오프셋
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return { toc, activeId, scrollToHeading };
};
