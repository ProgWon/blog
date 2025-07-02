import { allPosts } from "contentlayer/generated";

// 모든 게시글에서 사용된 카테고리들을 추출 (태그의 마지막 항목을 카테고리로 사용)
export const getAllCategories = (): string[] => {
  const categories = allPosts.reduce((cats: string[], post) => {
    if (post.tags && post.tags.length > 0) {
      // 태그의 마지막 항목을 카테고리로 사용 (API의 convertContentlayerToPost와 동일한 로직)
      const category = post.tags[post.tags.length - 1];
      if (!cats.includes(category)) {
        cats.push(category);
      }
    }
    return cats;
  }, []);

  // "전체"를 맨 앞에 추가하고 나머지는 알파벳 순 정렬
  return ["전체", ...categories.sort()];
};

// 카테고리별 게시글 개수를 반환
export const getCategoryCounts = (): Record<string, number> => {
  const categoryCounts: Record<string, number> = {};

  allPosts.forEach((post) => {
    if (post.tags && post.tags.length > 0) {
      const category = post.tags[post.tags.length - 1];
      categoryCounts[category] = (categoryCounts[category] || 0) + 1;
    }
  });

  // "전체"는 모든 게시글 수
  categoryCounts["전체"] = allPosts.length;

  return categoryCounts;
};
