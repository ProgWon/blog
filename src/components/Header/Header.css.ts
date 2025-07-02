import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../styles/tossStyle.css";

export const header = style({
  backgroundColor: vars.colors.background,
  position: "sticky",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  width: "100%",
  height: "59px",
  transition: "box-shadow 0.3s ease",
});

export const headerShadow = style({
  boxShadow: "0 1px 0 0 #eeeeee",
});

export const headerBorder = style({
  width: "100vw",
  height: "1px",
  backgroundColor: "#eeeeee",
  position: "fixed",
  top: "59px",
  left: 0,
  right: 0,
  zIndex: 999,
});

export const container = style({
  width: "86%",
  maxWidth: "1200px",
  margin: "0 auto",
  marginBottom: "24px",
  padding: "0 16px",
  "@media": {
    "(max-width: 768px)": {
      width: "90%",
      padding: "0 12px",
    },
  },
});

export const headerContent = style({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  height: "59px",
});

export const logoArea = style({
  display: "flex",
  alignItems: "center",
  textAlign: "left",
  flex: "0 0 auto",
});

export const logo = style({
  fontSize: "20px",
  fontWeight: 800,
  color: "#3182f6",
  margin: 0,
  letterSpacing: "-0.5px",
});

export const navigation = style({
  display: "flex",
  justifyContent: "flex-end",
  marginLeft: "auto",
  "@media": {
    "(max-width: 768px)": {
      display: "none",
    },
  },
});

export const menuList = style({
  display: "flex",
  listStyle: "none",
  margin: 0,
  padding: 0,
  gap: "32px",
  justifyContent: "flex-end",
});

export const menuItem = recipe({
  base: {
    textDecoration: "none",
    color: vars.colors.text,
    fontSize: "16px",
    fontWeight: 500,
    padding: "4px 0",
    position: "relative",
    selectors: {
      "&:after": {
        content: '""',
        position: "absolute",
        bottom: "-2px",
        left: 0,
        width: "0%",
        height: "2px",
        backgroundColor: vars.colors.primary,
        transition: "width 0.3s ease",
      },
      "&:hover:after": {
        width: "100%",
      },
      "&:hover": {
        color: vars.colors.primary,
      },
    },
  },
  variants: {
    active: {
      true: {
        color: vars.colors.primary,
        fontWeight: 700,
        selectors: {
          "&:after": {
            width: "100%",
          },
        },
      },
    },
  },
});

export const actions = style({
  display: "flex",
  alignItems: "center",
  gap: "16px",
});

export const subscribeButton = style({
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: 600,
  color: vars.colors.primary,
  padding: "8px 16px",
  borderRadius: "20px",
  border: `1px solid ${vars.colors.primary}`,
  transition: "all 0.2s ease",
  ":hover": {
    backgroundColor: vars.colors.primary,
    color: "white",
  },
});
