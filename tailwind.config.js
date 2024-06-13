/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: "#root",
  theme: {
    extend: {
      fontSize: {
        brand__font__size__xs: "12px",
        brand__font__size__sm: "14px",
        brand__font__size__base: "16px",
        brand__font__size__md: "18px",
        brand__font__size__lg: "24px",
        brand__font__size__xl: "52px",
        brand__font__size__2xl: "74px",
        section__title__size: "32px",
      },
      fontFamily: {
        brand__font__family: "Gabarito",
      },
      fontWeight: {
        brand__font__thin: "100",
        brand__font__light: "300",
        brand__font__regular: "400",
        brand__font__500: "500",
        brand__font__600: "600",
        brand__font__semibold: "700",
        brand__font__bold: "900",
      },
      padding: {
        yAxisPaddingNorm: "30px",
        yAxisPaddingMid: "60px",
      },
      screens: {
        xs: "300px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        primary: "#13a800",
        success: "#65B741",
        error: "#E72929",
        white: "#fff",

        brand__black__color: "#031401",
        brand__light_green__color: "#a4fb99",
        text__navy_blue: "#00306e",
        link__color: "#1976d2",
        text__gray: "#7a7a7a",
        section__bg_color: "#f1f1f1",
      },
      keyframes: {
        navMenuOpInOut: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        headerDrop: {
          "0%": {
            top: "-100px",
          },
          "100%": {
            top: "0px",
          },
        },
      },
      animation: {
        navMenuOpInOut: "navMenuOpInOut 0.5s linear 1",
        headerDrop: "headerDrop 0.5s linear 1",
      },
      backgroundImage: {
        globe: "url('../src/assets/image/background/bg.png')",
        not__found: "url('./src/assets/svg/404.svg')",
        ask__qus__background:
          "url('../src/assets/image/background/ask__qus__bg.jpeg')",
        login__background:
          "url('../src/assets/image/background/churchlogo-login-banner.jpeg')",
        test: "url('../src/assets/image/gallery/web-design/church_logo_web_design_02.png')",
      },
    },
  },
  plugins: [],
};
