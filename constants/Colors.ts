/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
  liquidTabActive: {
    background: "rgba(255, 255, 255, 0.6)",
    boxShadow:
      "0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.8)",
  },
  liquidTab: {
    background: "transparent",
    transition: "all 300ms ease-out",
    hover: {
      background: "rgba(255, 255, 255, 0.4)",
      transform: "scale(1.02)",
    },
  },
  liquidCard: {
    background: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(20px) saturate(180%)",
    boxShadow:
      "0 8px 32px rgba(31, 38, 135, 0.08), inset 0 1px 2px rgba(255, 255, 255, 0.6)",
  },
};
