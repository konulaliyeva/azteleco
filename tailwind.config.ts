import type { Config } from "tailwindcss";
import { colors } from "./src/data/constants/colors";

const fontSize = require("./src/data/constants/font_size");
const config: Config = {
  content: [
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize,
      colors,
      screens: {
        desktopLg: { min: "1220px", max: "3000px" },
        desktop: { min: "1220px", max: "1600px" },
        desktopMd: { min: "1220px", max: "1400px" },
        desktopSm: { min: "1025px", max: "1220px" },
        laptop: { min: "769px", max: "1024px" },
        laptopSm: { min: "769px", max: "940px" },
        tablet: { min: "601px", max: "768px" },
        mobileMd: { min: "601px", max: "699px" },
        mobile: { max: "600px" },
        mobileSm: { max: "480px" },
        mobileXs: { min: "376px", max: "420px" },
        smallMobile: { max: "376px" },
        mobileXxS: { max: "350px" },
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        // bai: ["var(--font-bai)", "sans-serif"],
        // baskerville: ["var(--font-baskerville)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        "xl-40": "40px",
      },
      keyframes: {
        overlayShow: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        contentShow: {
          from: {
            opacity: "0",
            transform: "translate(-50%, -30%) scale(0.85)",
          },
          to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
        },
      },
      animation: {
        overlayShow: "overlayShow 300ms cubic-bezier(0.16, 1, 0.3, 1)",
        contentShow: "contentShow 300ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
      },
      screens: {
        xl: "1600px",
      },
    },
  },
  plugins: [],
};
export default config;
