import React, {
  useRef,
  useState,
  useCallback,
  useEffect,
  useMemo,
} from "react";

import {
  NavigationContainer,
  createNavigationContainerRef,
  LinkingOptions,
  DefaultTheme,
} from "@react-navigation/native";
import LiveRouter from "modules/live/routing/LiveRouter";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";

import { Platform, StatusBar } from "react-native";

const Stack = createNativeStackNavigator();

export const navigationContainerRef = createNavigationContainerRef();

const MainRouter = () => {
  const routeNameRef = useRef<any>();
  const currentFocusedTab = useRef<any>();

  const [isNavigationReady, setIsNavigationReady] = useState(false);

  const onNavigationReady = useCallback(() => {
    routeNameRef.current = navigationContainerRef?.getCurrentRoute()?.name;

    // const { index, routes } = navigationContainerRef.getRootState();

    // currentFocusedTab.current = routes[index].name;

    setIsNavigationReady(true);
  }, []);

  const screenColorMappings = useMemo(() => {
    const mapping: ColorMapping = {};

    return mapping;
  }, []);

  const barStyleMappings = useMemo(() => {
    const mapping: BarStyleMapping = {};

    return mapping;
  }, []);

  // change bar style according to selected root tab and theme
  useEffect(() => {
    function applyBarStyle() {
      const currentRouteName = navigationContainerRef.getCurrentRoute()?.name;

      if (Platform.OS === "android") {
        const color = (screenColorMappings as any)?.[currentRouteName || ""];

        if (color) {
          StatusBar.setBackgroundColor(color);
        } //
        else {
          // StatusBar.setBackgroundColor(colors.background);
        }
      }

      const barStyle = (barStyleMappings as any)?.[currentRouteName || ""];

      if (barStyle) {
        StatusBar.setBarStyle(barStyle);
      } //
      // else if ("dark") {
      //   StatusBar.setBarStyle("light-content");
      // } //
      // else {
      //   StatusBar.setBarStyle("dark-content");
      // }
    }

    if (isNavigationReady) {
      applyBarStyle();
    }
  }, [isNavigationReady]);

  const theme = useMemo(
    () => ({
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
      },
    }),
    [],
  );

  const screenOptions: NativeStackNavigationOptions = useMemo(
    () => ({
      headerShown: false,
      cardStyle: {},
    }),
    [],
  );

  const initialRouteName = useMemo(() => {
    return "BottomTabs";
  }, []);

  return (
    <NavigationContainer
      ref={navigationContainerRef}
      onReady={onNavigationReady}
      linking={linking}
      theme={theme}
    >
      <Stack.Navigator
        screenOptions={screenOptions}
        initialRouteName={initialRouteName}
      >
        <Stack.Screen name="BottomTabs" component={LiveRouter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRouter;

const prefixes = [""];

const linking: LinkingOptions<ReactNavigation.RootStackParamList> = {
  prefixes,
  config: {
    screens: {
      BottomTabs: {
        screens: {
          LiveTab: {
            initialRouteName: "LiveHome",
            screens: {
              LiveDetail: "fixtures/:fixtureId?",
            },
          },
        },
      },
    },
  },
  enabled: true,
};

type ColorMapping = {
  [key in keyof Partial<ReactNavigation.RootStackParamList>]: string;
};

type BarStyleMapping = {
  [key in keyof Partial<ReactNavigation.RootStackParamList>]:
    | "light-content"
    | "dark-content";
};
