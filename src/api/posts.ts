import { allPosts, Post as ContentlayerPost } from "contentlayer/generated";

export interface Post {
  id: number;
  title: string;
  description: string;
  content: string;
  author: string;
  date: string;
  category: string;
  thumbnail?: string;
  slug?: string;
}

// 태그를 기존 네비게이션 카테고리에 매핑
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

// Contentlayer 데이터를 API Post 형태로 변환
const convertContentlayerToPost = (
  post: ContentlayerPost,
  index: number
): Post => {
  // 태그를 기존 네비게이션 카테고리에 매핑
  const category = mapTagToCategory(post.tags || []);

  // 썸네일 이미지 설정 (기본 이미지 사용)
  const thumbnail =
    post.image || "https://static.toss.im/assets/toss-tech/og-img-tech.png";

  return {
    id: index + 1,
    title: post.title,
    description: post.description,
    content: post.body?.raw || "", // MDX 원본 내용
    author: post.author || "작성자",
    date: new Date(post.date).toLocaleDateString("ko-KR"),
    category: category,
    thumbnail: thumbnail,
    slug: post.slug,
  };
};

// Contentlayer에서 생성된 포스트들을 API Post 형태로 변환
export const posts: Post[] = allPosts
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // 최신순 정렬
  .map(convertContentlayerToPost);

export const getPostsByCategory = (category: string): Post[] => {
  if (category === "전체") {
    return posts;
  }
  return posts.filter((post) => post.category === category);
};

export const getPostById = (id: number): Post | undefined => {
  return posts.find((post) => post.id === id);
};
