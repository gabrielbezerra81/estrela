/* eslint-disable react/style-prop-object */
import React, { useMemo } from "react";
import MainRouter from "routing/MainRouter";

import {
  useFonts,
  Inter_100Thin,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import { StatusBar } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  const routerComponent = useMemo(() => {
    if (fontsLoaded) {
      return <MainRouter />;
    }

    return null;
  }, [fontsLoaded]);

  return (
    <>
      <StatusBar translucent />
      {routerComponent}
    </>
  );
}
