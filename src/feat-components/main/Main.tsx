"use client";

import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Link from "next/link";
import PostCard from "@/src/components/PostCard";
import EmptyState from "@/src/components/EmptyState";
import { mainContent, postGrid } from "./Main.css";

interface PostType {
  _id: string;
  _raw: {
    flattenedPath: string;
  };
  title: string;
  date: string;
  description: string;
  tags?: string[];
  author?: string;
  slug: string;
  url: string;
}

interface MainProps {
  currentCategory: string;
}

// 태그를 기존 네비게이션 카테고리에 매핑 (src/api/posts.ts와 동일한 로직)
const mapTagToCategory = (tags: string[]): string => {
  if (!tags || tags.length === 0) return "개발";

  // 각 태그를 개별적으로 확인
  for (const tag of tags) {
    const lowerTag = tag.toLowerCase();

    // 데이터/ML 관련 키워드
    if (
      lowerTag.includes("ml") ||
      lowerTag.includes("data") ||
      lowerTag.includes("ai") ||
      lowerTag.includes("머신러닝") ||
      lowerTag.includes("데이터") ||
      lowerTag.includes("분석")
    ) {
      return "데이터/ML";
    }

    // 디자인 관련 키워드
    if (
      lowerTag.includes("design") ||
      lowerTag.includes("ui") ||
      lowerTag.includes("ux") ||
      lowerTag.includes("디자인") ||
      lowerTag.includes("브랜딩") ||
      lowerTag.includes("그래픽")
    ) {
      return "디자인";
    }
  }

  // 개발 관련 키워드 (기본값)
  return "개발";
};

// ContentLayer의 Post를 API Post 타입으로 변환
const convertToApiPost = (post: PostType) => {
  return {
    id: parseInt(post._id.split("-").pop() || "0"),
    title: post.title,
    description: post.description,
    content: "", // MDX 컨텐츠는 상세 페이지에서 처리
    author: post.author || "작성자",
    date: new Date(post.date).toLocaleDateString("ko-KR"),
    category: mapTagToCategory(post.tags || []),
    slug: post._raw.flattenedPath.replace("blog/", ""),
  };
};

const Main = ({ currentCategory }: MainProps) => {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  ) as PostType[];

  const convertedPosts = posts.map(convertToApiPost);

  // 카테고리별 필터링
  const filteredPosts =
    currentCategory === "전체"
      ? convertedPosts
      : convertedPosts.filter((post) => post.category === currentCategory);

  return (
    <main className={mainContent}>
      {filteredPosts.length === 0 ? (
        <EmptyState />
      ) : (
        <div className={postGrid}>
          {filteredPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              style={{ textDecoration: "none" }}
            >
              <PostCard post={post} />
            </Link>
          ))}
        </div>
      )}
    </main>
  );
};

export default Main;
