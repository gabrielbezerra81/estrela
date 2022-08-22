import React, { useCallback, useMemo } from "react";

import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";

import { StyleSheet, View, Text } from "react-native";
import { forSlide } from "shared/constants/navigationAnimations";
import Config from "react-native-config";

const LiveStack = createNativeStackNavigator();

const LiveRouter: React.FC = () => {
  const getId = useCallback(({ params }) => {
    const screenId = `${
      params?.fixture?.fixtureId || params?.fixtureId || params?.betfairId
    }`;

    return screenId;
  }, []);

  const containerStyle = useMemo(() => ({ flex: 1 }), []);

  const screenOptions = useMemo(
    () =>
      ({
        headerShown: false,
        cardStyle: { backgroundColor: "#081E31" },
        cardStyleInterpolator: forSlide,
      } as NativeStackNavigationOptions),
    [],
  );

  return (
    <View style={containerStyle}>
      <LiveStack.Navigator
        screenOptions={screenOptions}
        initialRouteName="LiveHome"
      >
        <LiveStack.Screen name="LiveHome" component={HelloWorld} />
      </LiveStack.Navigator>
    </View>
  );
};

export default LiveRouter;

const HelloWorld = () => {
  return (
    <View style={styles.container}>
      <Text>
        Open up App.js to start working on your app! - {Config.BUILD_TYPE}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
