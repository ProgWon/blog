import { createTheme } from "@vanilla-extract/css";

// 타입 정의
export type ColorMode = "light" | "dark";

// 테마별 색상 값 정의
export const [themeClass, vars] = createTheme({
  color: {
    primary: "#646cff",
    secondary: "#535bf2",
    background: "#ffffff",
    text: "#1a1a1a",
    border: "#eaeaea",
  },
  font: {
    body: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    heading:
      "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    code: "monospace",
  },
  space: {
    small: "0.5rem",
    medium: "1rem",
    large: "2rem",
  },
  borderRadius: {
    small: "4px",
    medium: "8px",
    large: "12px",
  },
});

// 다크 모드 테마 변수
export const darkTheme = createTheme(vars, {
  color: {
    primary: "#747bff",
    secondary: "#646cff",
    background: "#242424",
    text: "#ffffff",
    border: "#383838",
  },
  font: vars.font,
  space: vars.space,
  borderRadius: vars.borderRadius,
});
