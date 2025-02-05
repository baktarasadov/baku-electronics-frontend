import localFont from "next/font/local";

export const fontSfProDisplay = localFont({
  src: [
    {
      path: "../../../../public/fonts/sf-display-pro/SFPRODISPLAYBLACKITALIC.otf",
      weight: "900",
      style: "italic",
    },
    {
      path: "../../../../public/fonts/sf-display-pro/SFPRODISPLAYBOLD.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../../../public/fonts/sf-display-pro/SFPRODISPLAYHEAVYITALIC.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../../../../public/fonts/sf-display-pro/SFPRODISPLAYLIGHTITALIC.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../../../public/fonts/sf-display-pro/SFPRODISPLAYMEDIUM.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../../public/fonts/sf-display-pro/SFPRODISPLAYREGULAR.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../../public/fonts/sf-display-pro/SFPRODISPLAYSEMIBOLDITALIC.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../../../public/fonts/sf-display-pro/SFPRODISPLAYTHINITALIC.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../../../public/fonts/sf-display-pro/SFPRODISPLAYULTRALIGHTITALIC.otf",
      weight: "200",
      style: "italic",
    },
  ],
  variable: "--font-sfpro",
  display: "swap",
});
