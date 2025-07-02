import React from "react";

interface AdProps {
  title?: string;
  description?: string;
  link?: string;
  imageUrl?: string;
}

const Ad: React.FC<AdProps> = ({
  title = "토스 기술 블로그",
  description = "토스팀이 만드는 기술 컨텐츠를 확인해보세요",
  link = "https://toss.tech",
  imageUrl = "/images/ad-default.png",
}) => {
  return (
    <div
      style={{
        margin: "2rem 0",
        padding: "1.5rem",
        borderRadius: "12px",
        backgroundColor: "var(--color-bg-subtle)",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        border: "1px solid var(--color-border)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <div style={{ flexGrow: 1 }}>
          <h3
            style={{
              margin: "0 0 0.5rem 0",
              fontSize: "1.25rem",
              fontWeight: 600,
            }}
          >
            {title}
          </h3>
          <p
            style={{
              margin: 0,
              fontSize: "0.875rem",
              color: "var(--color-text-subtle)",
            }}
          >
            {description}
          </p>
        </div>
        {imageUrl && (
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "8px",
              overflow: "hidden",
              backgroundColor: "#f2f2f2",
            }}
          >
            <img
              src={imageUrl}
              alt="광고 이미지"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        )}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          padding: "0.5rem 1rem",
          backgroundColor: "var(--color-primary)",
          color: "white",
          textDecoration: "none",
          borderRadius: "8px",
          fontSize: "0.875rem",
          fontWeight: 500,
          textAlign: "center",
          alignSelf: "flex-start",
        }}
      >
        자세히 보기
      </a>
    </div>
  );
};

export default Ad;
