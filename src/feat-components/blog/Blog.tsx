import { notFound } from "next/navigation";
import Header from "@/src/components/Header";
import {
  articleContainer,
  mainContent,
  articleHeader,
  title,
  tagList,
  tag,
  publishDate,
  articleBody,
} from "./Blog.css";
import { getPost } from "./blogUtils";
import { PostType } from "./types";
import MDXRenderer from "./MDXRenderer";

interface BlogProps {
  slug: string;
}

export default function Blog({ slug }: BlogProps) {
  const post = getPost(slug) as PostType | undefined;

  if (!post) {
    notFound();
  }

  // 간단한 날짜 포맷팅
  const date = new Date(post.date);
  const formattedDate = date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Header />
      <div className={articleContainer}>
        <main className={mainContent}>
          <header className={articleHeader}>
            <h1 className={title}>{post.title}</h1>

            {post.tags && post.tags.length > 0 && (
              <div className={tagList}>
                {post.tags.map((tagName) => (
                  <span key={tagName} className={tag}>
                    #{tagName}
                  </span>
                ))}
              </div>
            )}

            <time dateTime={post.date} className={publishDate}>
              {formattedDate}
            </time>
          </header>

          <div className={articleBody}>
            <MDXRenderer code={post.body.code} />
          </div>
        </main>
      </div>
    </>
  );
}
