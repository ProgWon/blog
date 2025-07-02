import { style, globalStyle } from "@vanilla-extract/css";

export const sidebar = style({
  width: "100%",
  position: "sticky",
  top: "100px",
  height: "fit-content", // 콘텐츠에 맞는 높이
  minHeight: "100%", // 최소 높이는 부모 그리드 높이
});

export const sidebarSection = style({
  marginBottom: "48px",
});

export const sectionTitle = style({
  fontSize: "16px",
  fontWeight: 700,
  color: "#333333",
  marginBottom: "20px",
});

export const popularPostList = style({
  listStyle: "none",
  padding: 0,
  margin: 0,
});

export const popularPostItem = style({
  marginBottom: "24px",
});

globalStyle(`${popularPostItem}:last-child`, {
  marginBottom: 0,
});

globalStyle(`${popularPostItem} a`, {
  textDecoration: "none",
  color: "inherit",
  display: "block",
});

export const popularPostTitle = style({
  fontSize: "15px",
  fontWeight: 600,
  color: "#333333",
  margin: "0 0 6px 0",
  lineHeight: 1.4,
});

export const popularPostAuthor = style({
  fontSize: "13px",
  color: "#6b7684",
});

export const seriesList = style({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

export const seriesItem = style({
  padding: "20px",
  backgroundColor: "#f8f9fa",
  borderRadius: "16px",
});

globalStyle(`${seriesItem} a`, {
  textDecoration: "none",
  color: "inherit",
  display: "block",
});

export const seriesTitle = style({
  fontSize: "15px",
  fontWeight: 700,
  color: "#333333",
  margin: "0 0 6px 0",
});

export const seriesDescription = style({
  fontSize: "13px",
  color: "#6b7684",
  margin: "0 0 12px 0",
  lineHeight: 1.4,
});

export const seriesCount = style({
  fontSize: "13px",
  color: "#6b7684",
});

export const commentList = style({
  listStyle: "none",
  padding: 0,
  margin: 0,
});

export const commentItem = style({
  fontSize: "14px",
  color: "#6b7684",
});

export const tagList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
});

export const tagLink = style({
  textDecoration: "none",
  color: "inherit",
});

export const tagItem = style({
  display: "inline-block",
  padding: "8px 16px",
  backgroundColor: "#f8f9fa",
  borderRadius: "24px",
  fontSize: "14px",
  color: "#6b7684",
  transition: "background-color 0.2s ease",
  ":hover": {
    backgroundColor: "#eaecef",
  },
});
