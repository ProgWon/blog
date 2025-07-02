import React from "react";
import type { Post } from "../../api/posts";
import * as styles from "./PostCard.css";

interface PostCardProps {
  post: Post;
}

// 타입 정의
interface StylesType {
  postCard: string;
  thumbnail: string;
  content: string;
  title: string;
  description: string;
  meta: string;
  postCardLayout: string;
  placeholderImage: string;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  // 타입 캐스팅
  const typedStyles = styles as unknown as StylesType;

  return (
    <article className={typedStyles.postCard}>
      <div className={typedStyles.postCardLayout}>
        <div className={typedStyles.content}>
          <h3 className={typedStyles.title}>{post.title}</h3>
          <p className={typedStyles.description}>{post.description}</p>
          <div className={typedStyles.meta}>
            {post.date} · {post.author}
          </div>
        </div>

        <div className={typedStyles.thumbnail}>
          {post.thumbnail ? (
            <img src={post.thumbnail} alt="thumbnail" />
          ) : (
            <div className={typedStyles.placeholderImage}></div>
          )}
        </div>
      </div>
    </article>
  );
};

export default PostCard;
