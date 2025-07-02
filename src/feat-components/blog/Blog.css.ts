import { style, globalStyle } from "@vanilla-extract/css";

export const articleContainer = style({
  width: "86%",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "40px 16px",
  "@media": {
    "(max-width: 768px)": {
      width: "90%",
      padding: "20px 12px",
    },
  },
});

export const articleLayout = style({
  display: "grid",
  gridTemplateColumns: "1fr 300px",
  gap: "60px",
  "@media": {
    "(max-width: 1024px)": {
      gridTemplateColumns: "1fr",
      gap: "40px",
    },
  },
});

export const mainContent = style({
  maxWidth: "740px",
  margin: "0 auto",
  width: "100%",
});

export const articleHeader = style({
  marginBottom: "48px",
  paddingBottom: "32px",
  borderBottom: "1px solid #eeeeee",
});

export const title = style({
  fontSize: "40px",
  fontWeight: 800,
  lineHeight: 1.2,
  color: "#333333",
  margin: "0 0 24px 0",
  letterSpacing: "-0.5px",
  "@media": {
    "(max-width: 768px)": {
      fontSize: "28px",
      marginBottom: "16px",
    },
  },
});

export const tagList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
  marginBottom: "16px",
});

export const tag = style({
  display: "inline-block",
  padding: "4px 12px",
  backgroundColor: "#3182f6",
  color: "white",
  fontSize: "13px",
  fontWeight: 600,
  borderRadius: "16px",
  textDecoration: "none",
});

export const authorInfo = style({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  marginBottom: "16px",
});

export const authorName = style({
  fontSize: "16px",
  fontWeight: 600,
  color: "#333333",
});

export const authorRole = style({
  fontSize: "14px",
  color: "#6b7684",
});

export const publishDate = style({
  fontSize: "14px",
  color: "#6b7684",
});

export const articleBody = style({
  fontSize: "17px",
  lineHeight: 1.7,
  color: "#333333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'Pretendard Variable', 'Pretendard', 'Noto Sans KR', sans-serif",
});

// MDX 컨텐츠 스타일링
globalStyle(`${articleBody} h2`, {
  fontSize: "28px",
  fontWeight: 700,
  color: "#333333",
  margin: "48px 0 24px 0",
  lineHeight: 1.3,
});

globalStyle(`${articleBody} h3`, {
  fontSize: "22px",
  fontWeight: 700,
  color: "#333333",
  margin: "36px 0 18px 0",
  lineHeight: 1.4,
});

globalStyle(`${articleBody} p`, {
  margin: "0 0 20px 0",
  lineHeight: 1.7,
});

globalStyle(`${articleBody} ul, ${articleBody} ol`, {
  margin: "0 0 20px 0",
  paddingLeft: "24px",
});

globalStyle(`${articleBody} li`, {
  margin: "8px 0",
  lineHeight: 1.6,
});

globalStyle(`${articleBody} blockquote`, {
  margin: "32px 0",
  padding: "20px 24px",
  backgroundColor: "#f8f9fa",
  borderLeft: "4px solid #3182f6",
  borderRadius: "8px",
  fontSize: "16px",
  fontStyle: "italic",
  color: "#555555",
});

globalStyle(`${articleBody} code`, {
  backgroundColor: "#f1f3f5",
  color: "#e91e63",
  padding: "2px 6px",
  borderRadius: "4px",
  fontSize: "14px",
  fontFamily:
    "SFMono-Regular, Consolas, 'Liberation Mono', Menlo, Courier, monospace",
});

globalStyle(`${articleBody} pre`, {
  backgroundColor: "#f8f9fa",
  border: "1px solid #e9ecef",
  borderRadius: "8px",
  padding: "20px",
  margin: "24px 0",
  overflow: "auto",
  fontSize: "14px",
  lineHeight: 1.5,
});

globalStyle(`${articleBody} pre code`, {
  backgroundColor: "transparent",
  color: "#333333",
  padding: 0,
});

globalStyle(`${articleBody} a`, {
  color: "#3182f6",
  textDecoration: "underline",
  fontWeight: 500,
});

globalStyle(`${articleBody} a:hover`, {
  color: "#1c64da",
});

globalStyle(`${articleBody} img`, {
  maxWidth: "100%",
  height: "auto",
  borderRadius: "8px",
  margin: "24px 0",
  display: "block",
});

globalStyle(`${articleBody} table`, {
  width: "100%",
  borderCollapse: "collapse",
  margin: "24px 0",
  fontSize: "15px",
});

globalStyle(`${articleBody} th, ${articleBody} td`, {
  border: "1px solid #e9ecef",
  padding: "12px",
  textAlign: "left",
});

globalStyle(`${articleBody} th`, {
  backgroundColor: "#f8f9fa",
  fontWeight: 600,
});

export const sidebar = style({
  position: "sticky",
  top: "100px",
  height: "fit-content",
  "@media": {
    "(max-width: 1024px)": {
      display: "none",
    },
  },
});

export const sidebarSection = style({
  marginBottom: "32px",
});

export const sidebarTitle = style({
  fontSize: "16px",
  fontWeight: 700,
  color: "#333333",
  marginBottom: "16px",
});

export const tocList = style({
  listStyle: "none",
  padding: 0,
  margin: 0,
});

export const tocItem = style({
  marginBottom: "8px",
});

export const tocLink = style({
  display: "block",
  padding: "6px 0",
  color: "#6b7684",
  textDecoration: "none",
  fontSize: "14px",
  lineHeight: 1.4,
  borderLeft: "2px solid transparent",
  paddingLeft: "12px",
  transition: "all 0.2s ease",
  ":hover": {
    color: "#3182f6",
    borderLeftColor: "#3182f6",
  },
});

export const tocLinkActive = style({
  color: "#3182f6",
  fontWeight: 600,
  borderLeftColor: "#3182f6",
});

export const shareSection = style({
  padding: "20px",
  backgroundColor: "#f8f9fa",
  borderRadius: "12px",
});

export const shareTitle = style({
  fontSize: "14px",
  fontWeight: 600,
  color: "#333333",
  marginBottom: "12px",
});

export const shareButtons = style({
  display: "flex",
  gap: "8px",
});

export const shareButton = style({
  padding: "8px 12px",
  backgroundColor: "white",
  border: "1px solid #e9ecef",
  borderRadius: "6px",
  fontSize: "12px",
  color: "#6b7684",
  textDecoration: "none",
  transition: "all 0.2s ease",
  ":hover": {
    backgroundColor: "#f1f3f5",
    borderColor: "#3182f6",
    color: "#3182f6",
  },
});

export const backToList = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  padding: "12px 20px",
  backgroundColor: "#f8f9fa",
  border: "1px solid #e9ecef",
  borderRadius: "8px",
  color: "#333333",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: 500,
  marginBottom: "32px",
  transition: "all 0.2s ease",
  ":hover": {
    backgroundColor: "#e9ecef",
    borderColor: "#3182f6",
  },
});
