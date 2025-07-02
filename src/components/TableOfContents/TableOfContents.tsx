import React from "react";
import { useTableOfContents } from "../../hooks/useTableOfContents";
import * as styles from "./TableOfContents.css";

interface TableOfContentsProps {
  className?: string;
}

// 타입 정의
interface StylesType {
  tocContainer: string;
  tocTitle: string;
  tocNav: string;
  tocList: string;
  tocItem: string;
  tocLevel: (options: { level: number }) => string;
  tocLink: string;
  tocItemActive: string;
  tocLinkActive: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ className }) => {
  const { toc, activeId, scrollToHeading } = useTableOfContents();

  // 타입 캐스팅
  const typedStyles = styles as unknown as StylesType;

  if (toc.length === 0) {
    return null;
  }

  return (
    <div className={`${typedStyles.tocContainer} ${className || ""}`}>
      <h3 className={typedStyles.tocTitle}>목차</h3>
      <nav className={typedStyles.tocNav}>
        <ul className={typedStyles.tocList}>
          {toc.map((item) => (
            <li
              key={item.id}
              className={`${typedStyles.tocItem} ${typedStyles.tocLevel({
                level: item.level,
              })} ${activeId === item.id ? typedStyles.tocItemActive : ""}`}
            >
              <button
                className={`${typedStyles.tocLink} ${
                  activeId === item.id ? typedStyles.tocLinkActive : ""
                }`}
                onClick={() => scrollToHeading(item.id)}
                type="button"
              >
                {item.text}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default TableOfContents;
