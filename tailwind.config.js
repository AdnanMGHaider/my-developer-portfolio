/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontSize: {
        "xsm-font": [
          "0.823rem",
          { letterSpacing: "0.025em", lineHeight: "1.2rem" },
        ] /*13.17px*/,
        "sm-font": [
          "0.937rem",
          { letterSpacing: "0.025em", lineHeight: "1.5rem" },
        ] /*15px*/,
        "base-font": [
          "1rem",
          { letterSpacing: "0.025em", lineHeight: "1.7rem" },
        ] /*16px*/,
        "lg-font": [
          "1.138rem",
          { letterSpacing: "0.025em", lineHeight: "2rem" },
        ] /*18.22px*/,
        "xl-font": [
          "1.296rem",
          { letterSpacing: "0.025em", lineHeight: "2rem" },
        ] /*20.74px*/,
        "2xl-font": [
          "1.383rem",
          { letterSpacing: "0.025em", lineHeight: "2.1rem" },
        ] /*22.13px*/,
      },
      colors: {
        "accent-orange": "#ff7a5c",
        "background-purple": "#1a091c",
        "text-black": "#090309",
        "primary-purple": "#b85aff",
        "primary-purple-variation-1": "#cd8cff",
        "text-white": "#f8efff",
        "text-grey": "#857D8B",
        "footer-purple": "#2b0f2f",
      },
      backgroundImage: {
        heroSectionBgImg: "url('~/src/Assets/Images/HeroSectionBg.png')",
        wallBgImg: "url('~/src/Assets/Images/WallBg.png')",
        aboutMeDescriptionSticker:
          "url('~/src/Assets/Images/AboutMeDescriptionSticker.png')",
        contactMeFormSticker:
          "url('~/src/Assets/Images/ContactMeFormSticker.png')",
        smallScreenProjectsCardSticker:
          "url('~/src/Assets/Images/SmallScreenProjectsCardSticker.png')",
        // heroBgImg:
        //   "url('~/src/Assets/Images/BgWithoutGlowWithoutTornEffect.png')",
        // wallBgShortLgScreen: "url('~/src/Assets/Images/WallBgShortLgScr.png')",
        // wallBgShortSmScreen: "url('~/src/Assets/Images/WallBgShortSmScr.png')",
        // wallBgLongLgScreen: "url('~/src/Assets/Images/WallBgLongLgScr.png')",
        // wallBgLongSmScreen: "url('~/src/Assets/Images/WallBgLongSmScr.png')",
        // "about-me-paragraph-sticker":
        //   "url('~/src/Assets/Images/AboutMeParagraphSticker.png')",
        // "contact-form-sticker":
        //   "url('~/src/Assets/Images/ContactFormSticker.png')",
      },
    },
    screens: {
      "2xs": "365px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      xmd: "920px",
      lg: "1024px",
      xl: "1110px",
      "2xl": "1280px",
      "3xl": "1536px",
    },
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
      display: ["Neuepower", "cursive"],
    },
  },
  plugins: [],
};
