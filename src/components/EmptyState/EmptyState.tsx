import React from "react";
import * as styles from "./EmptyState.css";

interface EmptyStateProps {
  message?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  message = "아직 게시글이 없어요.",
}) => {
  return (
    <div className={styles.emptyContainer}>
      <div className={styles.emptyContent}>
        <h3 className={styles.emptyTitle}>{message}</h3>
        <p className={styles.emptyDescription}>
          곧 새로운 글이 업데이트될 예정이에요.
        </p>
      </div>
    </div>
  );
};

export default EmptyState;
