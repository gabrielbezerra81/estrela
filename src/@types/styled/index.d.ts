import * as styledComponents from "styled-components/native";

declare module "styled-components/native" {
  type StyledTheme = ReactNativePaper.Theme & {
    activeTheme: "light" | "dark";
  };

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends StyledTheme {}

  const {
    default: styled,
    css,
    ThemeProvider,
  } = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<StyledTheme>;

  export { css, ThemeProvider };
  export default styled;
}
