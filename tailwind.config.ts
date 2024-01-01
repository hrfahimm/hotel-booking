/** @type {import('tailwindcss').Config} */

import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");
const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#038c7f",
                secondary: "#f2c641",
                tertiary: {
                    dark: "#FF0000",
                    light: "#FF2E2E",
                },
            },
            fontFamily: {
                poppins: ["var(--font-popins)", ...fontFamily.sans],
            },
        },
    },
    plugins: [],
    darkMode: "class",
};
export default config;
// backgroundImage: {
//         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//         'gradient-conic':
//           'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
//       },
