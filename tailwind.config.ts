import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#1a545d',      // Color principal
        secondary: '#153548',    // Color secundario
        tertiary: '#ae9a8d',      // Color terciario
        error: '#e63946',        // Color para errores
        success: '#2a9d8f',      // Color para éxito
        warning: '#f1c40f',      // Color para advertencias
      },
    },
  },
  plugins: [],
};
export default config;
