declare module "*.jpg";
declare module "*.png";
declare module "*.webp";
declare module "*.json";

declare module "react-native-config" {
  export interface NativeConfig {
    BUILD_TYPE: "DEBUG" | "STAGING" | "PRODUCTION";
    [name: string]: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
