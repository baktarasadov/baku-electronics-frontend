module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sfpro: "var(--font-sfpro)",
      },
      colors: {
        white: "#ffff",
        "white-smoke": "#f5f5f5",
        "eerie-black": "#1A1A1A",
        "green-charleston": "#2B2B2B",
        jet: "#333333",
        onyx: "#3f3f3f",
        "red-cmyk": "#ea2427",
        platinum: "#e1e1e1",
        "anti-flash-white": "#ededed",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
      },
      fontSize: {
        xxxs: "8px",
        xxs: "10px",
        xs: "10.54px",
        sm: "12px",
        md: "14px",
        lg: "16px",
        xl: "18px",
        xxl: "20px",
        xxxl: "24px",
      },
      boxShadow: {
        scale: "0 0 25px rgba(0, 0, 0, 0.09)",
      },
    },
  },
  plugins: [],
};
