import React from "react";
import * as styles from "./Sidebar.css";
import { getAllTags, getTagCounts } from "../../utils/tagUtils";

// 타입 정의
interface StylesType {
  sidebar: string;
  sidebarSection: string;
  sectionTitle: string;
  popularPostList: string;
  popularPostItem: string;
  popularPostTitle: string;
  popularPostAuthor: string;
  seriesList: string;
  seriesItem: string;
  seriesTitle: string;
  seriesDescription: string;
  seriesCount: string;
  commentList: string;
  commentItem: string;
  tagList: string;
  tagItem: string;
  tagLink: string;
}

const Sidebar: React.FC = () => {
  // 타입 캐스팅
  const typedStyles = styles as unknown as StylesType;

  // 인기 있는 글 (고정 데이터)
  const popularPosts = [
    {
      id: 4,
      title: "토스페이먼츠 결제 시스템 연동을 돕는 MCP 서버 구현기",
      author: "김용성",
    },
    {
      id: 5,
      title: "신용대출 찾기 서비스 제휴사 mock 서버 개발기",
      author: "류경린",
    },
    {
      id: 6,
      title: "아름답고 이해하기 쉬운 세션 자료 만들기 | Simplicity 4 제작기 #5",
      author: "윤가빈",
    },
  ];

  // 아티클 시리즈
  const series = [
    {
      id: 1,
      title: "토스 피플",
      description: "토스 팀원들의 커리어 스토리",
      count: 7,
    },
    {
      id: 2,
      title: "Simplicity 4",
      description: "토스 디자인 컨퍼런스 Simplicity 4의 비하인드 스토리",
      count: 6,
    },
  ];

  // 실제 게시글에서 사용된 태그들
  const tags = getAllTags();
  const tagCounts = getTagCounts();

  return (
    <aside className={typedStyles.sidebar}>
      {/* 인기있는 글 섹션 */}
      <section className={typedStyles.sidebarSection}>
        <h2 className={typedStyles.sectionTitle}>인기있는 글</h2>
        <ul className={typedStyles.popularPostList}>
          {popularPosts.map((post) => (
            <li key={post.id} className={typedStyles.popularPostItem}>
              <a href="#">
                <h3 className={typedStyles.popularPostTitle}>{post.title}</h3>
                <span className={typedStyles.popularPostAuthor}>
                  {post.author}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* 아티클 시리즈 섹션 */}
      <section className={typedStyles.sidebarSection}>
        <h2 className={typedStyles.sectionTitle}>아티클 시리즈</h2>
        <ul className={typedStyles.seriesList}>
          {series.map((item) => (
            <li key={item.id} className={typedStyles.seriesItem}>
              <a href="#">
                <h3 className={typedStyles.seriesTitle}>{item.title}</h3>
                <p className={typedStyles.seriesDescription}>
                  {item.description}
                </p>
                <span className={typedStyles.seriesCount}>
                  아티클 {item.count}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* 태그 섹션 */}
      <section className={typedStyles.sidebarSection}>
        <h2 className={typedStyles.sectionTitle}>태그</h2>
        <div className={typedStyles.tagList}>
          {tags.map((tag, index) => (
            <a key={index} href="#" className={typedStyles.tagLink}>
              <span className={typedStyles.tagItem}>
                {tag} ({tagCounts[tag] || 0})
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* 최근 댓글 섹션 */}
      <section className={typedStyles.sidebarSection}>
        <h2 className={typedStyles.sectionTitle}>최근 댓글</h2>
        <ul className={typedStyles.commentList}>
          <li className={typedStyles.commentItem}>
            <p>아직 댓글이 없습니다.</p>
          </li>
        </ul>
      </section>
    </aside>
  );
};

export default Sidebar;
