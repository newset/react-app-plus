import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeBaseProvider } from "native-base";
import HomeScreen from "./src/pages";
import SettingsScreen from "./src/pages/Setting";
import About from "./src/pages/About";
import Example from "./src/pages/Example";
import { Image } from "native-base";
import { Icon, Colors } from "react-native-ui-lib";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabIcon =
  (src: { uri: string }) =>
  ({ focused }) => {
    return (
      <Icon
        source={src}
        size={20}
        tintColor={focused ? Colors.blue30 : Colors.grey5}
      ></Icon>
    );
  };

const Root = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: "#fff",
      }}
      screenOptions={{}}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: TabIcon(require("./assets/images/home.png")),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarIcon: TabIcon(require("./assets/images/info.png")),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: TabIcon(require("./assets/images/setting-one.png")),
        }}
      />
    </Tab.Navigator>
  );
};

export default function Router() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            contentStyle: {},
            headerShadowVisible: false,
            headerBackTitleVisible: false,
          }}
        >
          <Stack.Screen
            name="Root"
            component={Root}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Example" component={Example}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
