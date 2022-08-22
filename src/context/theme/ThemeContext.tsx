import { darken, lighten, rgba } from "polished";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";

import { useColorScheme } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { ThemeProvider as StyledThemeProvider } from "styled-components/native";

export const fonts = {
  thin: {
    fontFamily: "Inter_100Thin",
    fontWeight: "100",
  },
  light: {
    fontFamily: "Inter_300Light",
    fontWeight: "300",
  },
  regular: {
    fontFamily: "Inter_400Regular",
    fontWeight: "400",
    letterSpacing: 0,
  },
  medium: {
    fontFamily: "Inter_500Medium",
    fontWeight: "500",
  },
  bold: {
    fontFamily: "Inter_600SemiBold",
    fontWeight: "600",
  },
} as const;

// light
const textDarkBase = "#000";
const textDarkPrimary = "#0A0C19";
const textDarkPrimaryAlpha70 = rgba(textDarkPrimary, 0.7);
const textDarkPrimaryAlpha65 = rgba(textDarkPrimary, 0.65);
const textDarkPrimaryAlpha59 = rgba(textDarkPrimary, 0.59);
const textDarkPrimaryAlpha49 = rgba(textDarkPrimary, 0.49);
const textDarkPrimaryAlpha44 = rgba(textDarkPrimary, 0.44);
const textDarkPrimaryAlpha38 = rgba(textDarkPrimary, 0.38);
const textDarkPrimaryAlpha36 = rgba(textDarkPrimary, 0.36);
const textDarkPrimaryAlpha29 = rgba(textDarkPrimary, 0.29);
const lightPlaceholder = rgba(textDarkPrimary, 0.56);
const lightBackground = "#fff";
const lightRippleColor = "#f7f7f7";
const lightSurface = "#f7f7f7";
const lightAccent = "#FFD60A";
const lightUnfocusedButton = rgba("#5E5E5E", 0.24);
const lightDivider = rgba("#707070", 0.17);

// dark
const textLightBase = "#fff";
const textLightPrimary = "#fff";
const textLightPrimaryAlpha70 = rgba(textLightPrimary, 0.7);
const textLightPrimaryAlpha65 = rgba(textLightPrimary, 0.65);
const textLightPrimaryAlpha59 = rgba(textLightPrimary, 0.59);
const textLightPrimaryAlpha49 = rgba(textLightPrimary, 0.49);
const textLightPrimaryAlpha44 = rgba(textLightPrimary, 0.44);
const textLightPrimaryAlpha38 = rgba(textLightPrimary, 0.38);
const textLightPrimaryAlpha36 = rgba(textLightPrimary, 0.36);
const textLightPrimaryAlpha29 = rgba(textLightPrimary, 0.29);
const darkPlaceholder = rgba(textLightPrimary, 0.56);
const darkBackground = "#12172F";
const darkRippleColor = "#191e36";
const darkSurface = "#1b2037";
const darkAccent = "#E87C00";
const darkUnfocusedButton = rgba("#fff", 0.24);
const darkDivider = rgba("#fff", 0.06);

const backgroundDarker = "#0A0C19";
const borderColor = "#d8d8d8";
const layColor = "#F694AA";
const spinnerColor = "#007bff";

const darkerAccent = "#FFD60A";

export const lightTheme: ReactNativePaper.Theme = {
  dark: false,
  mode: "exact",
  roundness: 12,
  colors: {
    ...DefaultTheme.colors,
    // primary: "#e2e",
    accent: lightAccent,
    darkerAccent,
    background: lightBackground,
    surface: lightSurface,
    text: textDarkPrimary,
    disabled: "#d2d2d2",
    placeholder: lightPlaceholder,
    // backdrop: "#e2e",
    // onSurface: "#e2e",
    // notification: "#e2e",
    // error: "#e2e",
    // texts
    textBase: textDarkBase,
    textPrimaryAlpha70: textDarkPrimaryAlpha70,
    textPrimaryAlpha65: textDarkPrimaryAlpha65,
    textPrimaryAlpha59: textDarkPrimaryAlpha59,
    textPrimaryAlpha49: textDarkPrimaryAlpha49,
    textPrimaryAlpha44: textDarkPrimaryAlpha44,
    textPrimaryAlpha38: textDarkPrimaryAlpha38,
    textPrimaryAlpha36: textDarkPrimaryAlpha36,
    textPrimaryAlpha29: textDarkPrimaryAlpha29,
    // bgs
    bottomTabsContainer: lightBackground,
    bottomTabs: lightBackground,
    backgroundDarker,
    bottomTabBorderColor: "#eee",
    borderColor,
    unfocusedButton: lightUnfocusedButton,
    divider: lightDivider,
    rippleColor: lightRippleColor,
    borderDiscrete: "#E8E8E8",
    layColor,
    spinnerColor,
    accentRipple: rgba(lightAccent, 0.3),
  },
  fonts,
  animation: DefaultTheme.animation,
  changeTheme: () => {},
  activeTheme: "light",
  loadingTheme: true,
};

export const darkTheme: ReactNativePaper.Theme = {
  dark: true,
  mode: "exact",
  roundness: 12,
  colors: {
    ...DefaultTheme.colors,
    // primary: "#e2e",
    accent: darkAccent,
    darkerAccent,
    background: darkBackground,
    surface: darkSurface,
    text: textLightPrimary,
    disabled: "#3b3e46",
    placeholder: darkPlaceholder,
    // backdrop: "",
    // onSurface: "",
    // notification: "",
    // error: "",
    // texts
    textBase: textLightBase,
    textPrimaryAlpha70: textLightPrimaryAlpha70,
    textPrimaryAlpha65: textLightPrimaryAlpha65,
    textPrimaryAlpha59: textLightPrimaryAlpha59,
    textPrimaryAlpha49: textLightPrimaryAlpha49,
    textPrimaryAlpha44: textLightPrimaryAlpha44,
    textPrimaryAlpha38: textLightPrimaryAlpha38,
    textPrimaryAlpha36: textLightPrimaryAlpha36,
    textPrimaryAlpha29: textLightPrimaryAlpha29,
    // bgs
    bottomTabsContainer: darkBackground,
    bottomTabs: backgroundDarker,
    backgroundDarker,
    bottomTabBorderColor: darken(0.02, "#0b0f17"),
    unfocusedButton: darkUnfocusedButton,
    borderColor,
    divider: darkDivider,
    rippleColor: darkRippleColor,
    borderDiscrete: lighten(0.05, darkSurface),
    layColor,
    spinnerColor,
    accentRipple: rgba(darkAccent, 0.3),
  },
  fonts,
  animation: DefaultTheme.animation,
  changeTheme: () => {},
  activeTheme: "dark",
  loadingTheme: true,
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

const ThemeProvider: React.FC = ({ children }) => {
  const colorScheme = useColorScheme();

  const [activeTheme, setActiveTheme] = useState<ActiveTheme>("light");
  const [loadingTheme, setLoadingTheme] = useState(true);

  const changeTheme = useCallback(() => {
    setActiveTheme((currentTheme) => {
      let value: ActiveTheme = "light";

      if (currentTheme === "light") {
        value = "dark";
      }

      AsyncStorage.setItem("@estrela-scores:activeTheme", value);

      return value;
    });
  }, []);

  const theme = useMemo(
    () => ({
      ...themes[activeTheme],
      changeTheme,
      activeTheme,
      loadingTheme,
    }),
    [activeTheme, changeTheme, loadingTheme],
  );

  const styledTheme = useMemo(
    () => ({
      ...theme,
      activeTheme,
      ...{
        space: [0, 0, 4, 0, 12],
      },
      colors: {
        ...themes[activeTheme].colors,
        border: "#E2E8F0",
        muted: "#F0F1F3",
        success: "#7DBE31",
        info: "#00FFFF",
      },
    }),
    [theme, activeTheme],
  );

  useEffect(() => {
    async function loadTheme() {
      const theme = (await AsyncStorage.getItem(
        "@estrela-scores:activeTheme",
      )) as ActiveTheme | null;

      if (theme) {
        setActiveTheme(theme);
      } //
      else {
        const value = colorScheme || "light";

        setActiveTheme(value);
        await AsyncStorage.setItem("@estrela-scores:activeTheme", value);
      }

      setLoadingTheme(false);
    }

    loadTheme();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PaperProvider theme={theme}>
      <StyledThemeProvider theme={styledTheme}>{children}</StyledThemeProvider>
    </PaperProvider>
  );
};

export default ThemeProvider;

type ActiveTheme = "light" | "dark";
