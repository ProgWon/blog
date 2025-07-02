import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const navigationContainer = style({
  width: "100%",
  position: "sticky",
  top: "59px", // 헤더 높이만큼 아래에 고정
  backgroundColor: "white",
  zIndex: 999,
  borderBottom: "1px solid #eeeeee",
  height: "57px",
  marginBottom: "32px", // 첫 번째 게시글과의 간격
});

export const navigationWrapper = style({
  width: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-end",
  height: "100%",
});

export const menuList = style({
  display: "flex",
  listStyle: "none",
  margin: 0,
  padding: 0,
  height: "100%",
  alignItems: "flex-end",
});

export const menuItem = recipe({
  base: {
    textDecoration: "none",
    color: "#6b7684",
    fontSize: "17px",
    fontWeight: 700,
    padding: "18px 20px 17px 20px",
    position: "relative",
    display: "inline-block",
    height: "57px",
    boxSizing: "border-box",
    selectors: {
      "&:hover": {
        color: "#3182f6",
      },
    },
  },
  variants: {
    active: {
      true: {
        color: "#333333",
        fontWeight: 700,
        borderBottom: "2px solid #333333",
        padding: "18px 20px 15px 20px", // 하단 패딩을 2px 줄여서 보더 공간 확보
      },
    },
  },
});
