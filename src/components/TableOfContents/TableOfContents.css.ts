import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const tocContainer = style({
  padding: "16px",
  backgroundColor: "#f8f9fa",
  borderRadius: "8px",
  border: "1px solid #e9ecef",
});

export const tocTitle = style({
  fontSize: "16px",
  fontWeight: 600,
  color: "#333",
  margin: "0 0 12px 0",
});

export const tocNav = style({
  // Navigation wrapper
});

export const tocList = style({
  listStyle: "none",
  margin: 0,
  padding: 0,
});

export const tocItem = style({
  marginBottom: "4px",
});

export const tocLevel = recipe({
  base: {},
  variants: {
    level: {
      1: { paddingLeft: "0px" },
      2: { paddingLeft: "12px" },
      3: { paddingLeft: "24px" },
      4: { paddingLeft: "36px" },
      5: { paddingLeft: "48px" },
      6: { paddingLeft: "60px" },
    },
  },
});

export const tocLink = style({
  display: "block",
  width: "100%",
  padding: "6px 8px",
  border: "none",
  background: "transparent",
  color: "#6b7684",
  fontSize: "14px",
  textAlign: "left",
  cursor: "pointer",
  borderRadius: "4px",
  transition: "all 0.2s ease",
  textDecoration: "none",

  ":hover": {
    backgroundColor: "#e9ecef",
    color: "#333",
  },

  ":focus": {
    outline: "2px solid #3182f6",
    outlineOffset: "2px",
  },
});

export const tocItemActive = style({
  backgroundColor: "#e3f2fd",
  borderRadius: "4px",
});

// 활성 상태의 링크 스타일을 별도로 정의
export const tocLinkActive = style({
  color: "#3182f6 !important",
  fontWeight: "500 !important",
});
