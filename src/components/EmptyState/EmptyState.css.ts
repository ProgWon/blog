import { style } from "@vanilla-extract/css";

export const emptyContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "300px",
  padding: "60px 20px",
});

export const emptyContent = style({
  textAlign: "center",
  maxWidth: "400px",
});

export const emptyTitle = style({
  fontSize: "24px",
  fontWeight: 600,
  color: "#333333",
  margin: "0 0 12px 0",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'Pretendard Variable', 'Pretendard', 'Noto Sans KR', sans-serif",
});

export const emptyDescription = style({
  fontSize: "16px",
  color: "#6b7684",
  margin: 0,
  lineHeight: 1.5,
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'Pretendard Variable', 'Pretendard', 'Noto Sans KR', sans-serif",
});
