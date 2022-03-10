import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import { View, Text, Colors, GridView } from "react-native-ui-lib";

const Color = () => {
  const colors = [
    "blue",
    "grey",
    "red",
    "green",
    "yellow",
    "cyan",
    "purple",
    "orange",
    "violet",
  ];
  const keys = Object.keys(Colors);

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={{ padding: 20 }}>
          {colors.map((col) => {
            const sub = keys.filter((key) => key.startsWith(col));
            return (
              <View key={col}>
                <Text>{col}</Text>
                <View
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                >
                  <GridView
                    itemSpacing={20}
                    items={sub.map((item) => ({ title: item, color: item }))}
                    // numColumns={5}
                    renderCustomItem={(item) => {
                      const color = item.title as string;
                      return (
                        <View key={color}>
                          <View
                            style={{
                              height: 20,
                              width: 80,
                              backgroundColor: Colors[color],
                            }}
                          ></View>
                          <Text>{item.title}</Text>
                        </View>
                      );
                    }}
                  />
                  {/* {sub.map((color) => {
                  return (
                    <View key={color} style={{ width: "23%", marginBottom: 20 }}>
                      <View
                        style={{
                          backgroundColor: Colors[color],
                          width: "100%",
                          height: 20,
                        }}
                      ></View>
                      <Text>{color}</Text>
                    </View>
                  );
                })} */}
                </View>
              </View>
            );
          })}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Color;
