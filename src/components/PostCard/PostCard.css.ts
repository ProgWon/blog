import { style, globalStyle } from "@vanilla-extract/css";

export const postCard = style({
  marginBottom: "40px",
  ":hover": {
    cursor: "pointer",
  },
});

export const postCardLayout = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "16px",
});

export const content = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const title = style({
  fontSize: "18px",
  fontWeight: 700,
  margin: 0,
  lineHeight: 1.3,
  color: "#333333",
});

export const description = style({
  fontSize: "15px",
  color: "#6b7684",
  margin: 0,
  lineHeight: 1.5,
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const meta = style({
  fontSize: "14px",
  color: "#6b7684",
  marginTop: "4px",
});

export const thumbnail = style({
  width: "130px",
  height: "90px",
  borderRadius: "8px",
  overflow: "hidden",
  flexShrink: 0,
});

// 이미지 스타일 적용
globalStyle(`${thumbnail} img`, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const placeholderImage = style({
  width: "100%",
  height: "100%",
  backgroundColor: "#e0e0e0",
  borderRadius: "8px",
});
