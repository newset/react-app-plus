import React from "react";
import { TouchableOpacity } from "react-native";

import { View, TextField, Text, Button, Colors } from "react-native-ui-lib";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        size={Button.sizes.small}
        backgroundColor={Colors.blue30}
        onPress={() => navigation.navigate("Example")}
        label="示例"
      ></Button>
    </View>
  );
};

export default Home;
