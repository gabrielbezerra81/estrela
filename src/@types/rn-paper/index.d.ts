declare global {
  namespace ReactNativePaper {
    interface Theme {
      changeTheme: () => any;
      activeTheme: "light" | "dark";
      loadingTheme: boolean;
    }

    interface ThemeColors {
      textBase: string;
      textPrimaryAlpha70: string;
      textPrimaryAlpha65: string;
      textPrimaryAlpha59: string;
      textPrimaryAlpha49: string;
      textPrimaryAlpha44: string;
      textPrimaryAlpha38: string;
      textPrimaryAlpha36: string;
      textPrimaryAlpha29: string;

      bottomTabsContainer: string;
      bottomTabs: string;
      backgroundDarker: string;
      bottomTabBorderColor: string;
      borderColor: string;
      unfocusedButton: string;
      divider: string;
      rippleColor: string;
      borderDiscrete: string;
      layColor: string;
      spinnerColor: string;
      accentRipple: string;
      darkerAccent: string;
    }
  }
}

export {};
