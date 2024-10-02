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

export const themeClasses = {
  light: {
    bg: "bg-white",
    text: "text-gray-900",
    card: "bg-white",
    primary: "text-gray-900",
  },
  dark: {
    bg: "bg-gray-900",
    text: "text-gray-100",
    card: "bg-gray-800",
    primary: "text-white",
  },
};