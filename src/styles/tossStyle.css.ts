import { createGlobalTheme, globalStyle, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

// 토스 기술 블로그 스타일 테마
export const vars = createGlobalTheme(":root", {
  colors: {
    background: "#ffffff",
    backgroundDark: "#212529",
    primary: "#3182f6",
    secondary: "#1c64da",
    text: "#333333",
    textDark: "#ffffff",
    border: "#eeeeee",
    borderDark: "#444444",
    muted: "#6b7684",
    mutedDark: "#a0a0a0",
  },
  space: {
    none: "0",
    small: "0.5rem",
    medium: "1rem",
    large: "2rem",
    xlarge: "3rem",
  },
  fonts: {
    body: "-apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'Pretendard Variable', 'Pretendard', 'Noto Sans KR', sans-serif",
    heading:
      "-apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'Pretendard Variable', 'Pretendard', 'Noto Sans KR', sans-serif",
    monospace:
      "'SF Mono', SFMono-Regular, Consolas, 'Liberation Mono', Menlo, Courier, monospace",
  },
  fontSizes: {
    small: "0.875rem",
    body: "1rem",
    h3: "1.25rem",
    h2: "1.5rem",
    h1: "2rem",
    xlarge: "3rem",
  },
  shadows: {
    small: "0 1px 3px rgba(0,0,0,0.1)",
    medium: "0 4px 6px rgba(0,0,0,0.1)",
    large: "0 10px 15px rgba(0,0,0,0.1)",
  },
  radii: {
    small: "4px",
    medium: "8px",
    large: "16px",
    round: "9999px",
  },
});

// 글로벌 스타일 정의
globalStyle("body", {
  fontFamily: vars.fonts.body,
  margin: 0,
  padding: 0,
  color: vars.colors.text,
  backgroundColor: vars.colors.background,
  lineHeight: 1.6,
});

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
});

// 컨테이너 스타일
export const container = style({
  width: "86%",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: `0 ${vars.space.medium}`,
  "@media": {
    "(max-width: 768px)": {
      width: "90%",
      padding: `0 ${vars.space.small}`,
    },
  },
});

// 버튼 스타일
export const button = recipe({
  base: {
    fontFamily: vars.fonts.body,
    fontSize: vars.fontSizes.body,
    padding: `${vars.space.small} ${vars.space.medium}`,
    borderRadius: vars.radii.small,
    border: "none",
    cursor: "pointer",
    transition: "all 0.2s ease",
    fontWeight: 500,
  },
  variants: {
    color: {
      primary: {
        backgroundColor: vars.colors.primary,
        color: "#ffffff",
        ":hover": {
          backgroundColor: vars.colors.secondary,
        },
      },
      secondary: {
        backgroundColor: "transparent",
        border: `1px solid ${vars.colors.border}`,
        color: vars.colors.text,
        ":hover": {
          borderColor: vars.colors.muted,
        },
      },
    },
    size: {
      small: {
        fontSize: vars.fontSizes.small,
        padding: `${vars.space.small} ${vars.space.small}`,
      },
      medium: {
        padding: `${vars.space.small} ${vars.space.medium}`,
      },
      large: {
        padding: `${vars.space.medium} ${vars.space.large}`,
      },
    },
  },
  defaultVariants: {
    color: "primary",
    size: "medium",
  },
});

// 카드 스타일
export const card = recipe({
  base: {
    borderRadius: vars.radii.medium,
    padding: vars.space.medium,
    transition: "all 0.2s ease",
  },
  variants: {
    elevation: {
      flat: {
        border: `1px solid ${vars.colors.border}`,
      },
      raised: {
        boxShadow: vars.shadows.small,
        ":hover": {
          boxShadow: vars.shadows.medium,
        },
      },
    },
    theme: {
      light: {
        backgroundColor: vars.colors.background,
        color: vars.colors.text,
        borderColor: vars.colors.border,
      },
      dark: {
        backgroundColor: vars.colors.backgroundDark,
        color: vars.colors.textDark,
        borderColor: vars.colors.borderDark,
      },
    },
  },
  defaultVariants: {
    elevation: "flat",
    theme: "light",
  },
});

// 타이포그래피 스타일
export const text = recipe({
  base: {
    margin: 0,
    padding: 0,
    fontFamily: vars.fonts.body,
  },
  variants: {
    size: {
      small: { fontSize: vars.fontSizes.small },
      body: { fontSize: vars.fontSizes.body },
      h3: { fontSize: vars.fontSizes.h3, fontWeight: 600 },
      h2: { fontSize: "1.3rem", fontWeight: 600 },
      h1: { fontSize: vars.fontSizes.h1, fontWeight: 700 },
      xlarge: {
        fontSize: vars.fontSizes.xlarge,
        fontWeight: 700,
        lineHeight: 1.2,
      },
    },
    weight: {
      normal: { fontWeight: 400 },
      medium: { fontWeight: 500 },
      bold: { fontWeight: 700 },
    },
    color: {
      normal: { color: vars.colors.text },
      muted: { color: "#6b7684" },
      primary: { color: "#3182f6" },
    },
  },
  defaultVariants: {
    size: "body",
    weight: "normal",
    color: "normal",
  },
});

// 토스 기술 블로그 헤더 스타일
export const header = style({
  borderBottom: `1px solid ${vars.colors.border}`,
  padding: `${vars.space.medium} 0`,
  marginBottom: vars.space.large,
});

// 헤더 로고 스타일
export const logo = style({
  fontSize: vars.fontSizes.h2,
  fontWeight: 700,
  color: vars.colors.primary,
});

// 블로그 포스트 그리드
export const postGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gap: vars.space.medium,
  margin: `${vars.space.large} 0`,
});

// 블로그 포스트 스타일
export const postCard = style({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  transition: "transform 0.2s ease",
  ":hover": {
    transform: "translateY(-4px)",
  },
});

// 포스트 썸네일
export const thumbnail = style({
  width: "100%",
  height: "180px",
  objectFit: "cover",
  borderRadius: vars.radii.small,
  marginBottom: vars.space.small,
});
