declare global {
  namespace ReactNavigation {
    type RootStackParamList = {
      BottomTabs: undefined;
      LiveHome: undefined;
      LiveDetail: undefined;
    };
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends RootStackParamList {}
  }
}

export {};
