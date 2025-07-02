import { allPosts } from "contentlayer/generated";

// 정적 경로 생성
export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath.replace("blog/", ""),
  }));
}

// 메타데이터 생성
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {
      title: "포스트를 찾을 수 없습니다",
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

// 포스트 조회 함수
export function getPost(slug: string) {
  return allPosts.find(
    (post) => post._raw.flattenedPath.replace("blog/", "") === slug
  );
}
