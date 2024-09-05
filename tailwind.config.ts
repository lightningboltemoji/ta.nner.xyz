import type { Config } from "tailwindcss";

const config: Partial<Config> = {
  theme: {
    extend: {
      screens: {
        screen: { raw: "screen" },
      },
      fontFamily: {
        sans: ["Inter"],
        mono: ["IBM\\ Plex\\ Mono"],
      },
      fontSize: {
        xxs: "0.6rem",
      },
    },
  },
  plugins: [],
};
export default config;
