export interface ThemeClass {
  bg: string;
  text: string;
  primary: string;
  card: string;
}

export interface ThemeClasses {
  light: ThemeClass;
  dark: ThemeClass;
}

export const themeClasses:ThemeClasses = {
  light: {
    bg: "bg-white",
    text: "text-black",
    primary: "text-gray-800",
    card: "bg-gray-100",
  },
  dark: {
    bg: "bg-gray-900",
    text: "text-white",
    primary: "text-gray-200",
    card: "bg-gray-800",
  },
};
