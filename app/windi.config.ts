import { defineConfig } from "windicss/helpers";
import colors from "windicss/colors";
import themeSwapper from "tailwindcss-theme-swapper";

const common = {
  background: "#111",
  foreground: "#eee",
  technos: "#39b1a7",
  idees: "#913fdf",
  divers: "#0cb870",
};

// 4D969F;
// 6AB1AE;
// 68654F;
// C9C0A5;
// F2EDC3

export default defineConfig({
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1536px",
      },
      colors: {
        gray: colors.coolGray,
        blue: colors.lightBlue,
        red: colors.rose,
        pink: colors.fuchsia,
      },
      fontFamily: {
        sans: ["Varela Round", "sans-serif"],
        // sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      zIndex: {
        "-1": "-1",
      },
      textShadow: {
        "around": "0 0 4px black",
      },
    },
  },
  plugins: [
    themeSwapper({
      themes: [
        // The only required theme is `base`. Every property used in
        // other themes must exist in here.
        {
          name: "base",
          selectors: [":root"],
          theme: {
            colors: {
              ...common,
              primary: "#fff",
            },
          },
        },
        {
          name: "technos",
          selectors: [".technos"],
          theme: {
            colors: {
              ...common,
              primary: "#39b1a7",
            },
          },
        },
        {
          name: "idees",
          selectors: [".idees"],
          theme: {
            colors: {
              ...common,
              primary: "#913fdf",
            },
          },
        },
        {
          name: "divers",
          selectors: [".divers"],
          theme: {
            colors: {
              ...common,
              primary: "#0cb870",
            },
          },
        },
      ],
    }),
  ]
});