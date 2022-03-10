import React from "react";
import { ScrollView } from "react-native";
import { View, Text } from "native-base";
import pkg from "../../package.json";

const About = () => {
  return (
    <ScrollView style={{ padding: 20 }}>
      <View flexDirection="row" style={{ justifyContent: "space-between" }}>
        <Text>版本</Text>
        <Text>{pkg.version}</Text>
      </View>
      <View flexDirection="row" style={{ justifyContent: "flex-start" }}>
        <Text>依赖</Text>
      </View>
      <View style={{ paddingVertical: 20 }}>
        {Object.keys(pkg.dependencies).map((dep) => {
          return (
            <View
              key={dep}
              flexDirection="row"
              style={{
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Text>{dep}</Text>
              <Text>{pkg.dependencies[dep]}</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default About;
