import React from "react";
import { Pressable, Text } from "react-native";

const CustomButton = ({
  onPress,
  title,
}: {
  onPress: () => void;
  title: string;
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "orange",
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 3,
      }}
    >
      <Text
        style={{
          color: "white",
          fontWeight: "500",
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default CustomButton;
