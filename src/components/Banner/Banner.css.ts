import { style } from "@vanilla-extract/css";

export const bannerContainer = style({
  width: "100%",
  overflow: "hidden",
  marginBottom: "40px",
  marginTop: "24px",
});

export const bannerWrapper = style({
  width: "86%",
  maxWidth: "1200px",
  margin: "0 auto",
  height: "130px",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  "@media": {
    "(max-width: 768px)": {
      width: "90%",
      maxHeight: "300px",
    },
  },
  borderRadius: "16px",
});

export const bannerImage = style({
  width: "100%",
  height: "auto",
  objectFit: "cover",
  display: "block",
});
