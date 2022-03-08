/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  NativeModules,
} from "react-native";

import { Colors, Header } from "react-native/Libraries/NewAppScreen";
const { RNPlus } = NativeModules;

console.log("modules: ", NativeModules);

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}
        >
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              console.log("RNPlus", RNPlus);
              RNPlus.navigate("intro", "test");
            }}
          >
            <Text>open intro</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              console.log("RNPlus", RNPlus);
              RNPlus.navigate("demo", "test");
            }}
          >
            <Text>open demo</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 100,
    height: 30,
    backgroundColor: "#ddd",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
