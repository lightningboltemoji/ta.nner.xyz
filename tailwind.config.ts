import type { Config } from "tailwindcss";

const config: Partial<Config> = {
  theme: {
    extend: {
      screens: {
        screen: { raw: "screen" },
      },
      // fontFamily: {
      //   sans: ["var(--font-inter)"],
      //   mono: ["var(--font-ibm-plex-mono)"],
      // },
      fontSize: {
        xxs: "0.6rem",
      },
    },
  },
  plugins: [],
};
export default config;
