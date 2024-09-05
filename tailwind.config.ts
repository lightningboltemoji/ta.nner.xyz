import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Partial<Config> = {
  theme: {
    extend: {
      screens: {
        screen: { raw: "screen" },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        mono: ["'IBM Plex Mono'", ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        xxs: "0.6rem",
      },
    },
  },
  plugins: [],
};
export default config;
