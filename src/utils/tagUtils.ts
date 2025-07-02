import { allPosts } from "contentlayer/generated";

// 모든 게시글에서 사용된 태그들을 추출하고 중복 제거
export const getAllTags = (): string[] => {
  const allTags = allPosts.reduce((tags: string[], post) => {
    if (post.tags && post.tags.length > 0) {
      return [...tags, ...post.tags];
    }
    return tags;
  }, []);

  // 중복 제거 및 알파벳 순 정렬
  const uniqueTags = Array.from(new Set(allTags)).sort();

  return uniqueTags;
};

// 태그별 게시글 개수를 반환
export const getTagCounts = (): Record<string, number> => {
  const tagCounts: Record<string, number> = {};

  allPosts.forEach((post) => {
    if (post.tags && post.tags.length > 0) {
      post.tags.forEach((tag) => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      });
    }
  });

  return tagCounts;
};
