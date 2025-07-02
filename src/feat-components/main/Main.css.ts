import { style } from "@vanilla-extract/css";

export const pageLayout = style({
  display: "grid",
  gridTemplateColumns: "1fr 300px", // 사이드바 300px 고정
  gap: "24px",
  alignItems: "stretch", // 그리드 아이템들이 같은 높이를 가지도록
  minHeight: "calc(100vh - 200px)", // 헤더와 배너를 제외한 높이
});

export const mainContentWrapper = style({
  borderRight: "1px solid #eeeeee",
  paddingRight: "24px",
  height: "100%", // 부모 그리드 높이에 맞춤
});

export const mainContent = style({
  display: "flex",
  flexDirection: "column",
});

export const navigationContainer = style({
  marginBottom: "32px",
});

export const postGrid = style({
  display: "flex",
  flexDirection: "column",
  gap: "32px",
});
