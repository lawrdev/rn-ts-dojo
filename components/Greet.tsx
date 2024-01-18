import React from "react";
import {
  Text,
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Dimensions,
} from "react-native";

const Box = ({
  name,
  boxStyles,
}: {
  name: string;
  boxStyles?: StyleProp<ViewStyle>;
}) => {
  return (
    <View style={[styles.containeer, boxStyles]}>
      <Text style={styles.text}>Hello, {name}</Text>
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  containeer: {
    backgroundColor: "plum",
    padding: 15,
    width: "100%",
    height: 60,

    shadowColor: "#333",
    shadowOffset: {
      width: 8,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,

    elevation: 3,

    borderRadius: 4,
  },
  text: {
    fontWeight: "bold",
  },
});

export default Box;
