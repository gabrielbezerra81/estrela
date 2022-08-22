import { Dimensions, PixelRatio } from "react-native";

const { width, scale } = Dimensions.get("window");

// when passing styles or attributes follow the rule bellow:

// * if is passing style, pass style with responsive function calls for each attribute.

// * VALID FOR CUSTOM COMPONENTS: if passing a number, there's no need to call responsive
//   function, it will be called in the custom component

export function getREMSize() {
  if (width > 1000) {
    return 20;
  }

  if (width >= 900) {
    return 19;
  }

  if (width >= 700) {
    return 17;
  }

  if (width > 550) {
    return 16;
  } //
  if (width <= 320 || scale * width <= 720) {
    return 14;
  }

  if (width <= 375) {
    return 15;
  }

  return 16;
}

export const remSize = getREMSize();

const factor = remSize / 16;

export default function getResponsiveSize(size: number) {
  if (factor !== 1) {
    return PixelRatio.roundToNearestPixel(size * factor);
  }

  return size * factor;
}
