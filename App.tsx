import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
  ActivityIndicator,
  Alert,
} from "react-native";
import Greet from "./components/Greet";
import Box from "./components/Greet";
const localImg = require("./assets/adaptive-icon.png");

export default function App() {
  const [show, toggle] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" animated />
      <View style={{ gap: 10, marginBottom: 40 }}>
        <Button
          title="Show Modal"
          onPress={() => {
            toggle(true);
          }}
          color={"midnightblue"}
        />
      </View>

      <View style={styles.boxesContaiber}>
        <Box name="Lawr" />
        <Box name="Fiona" />
        <Box name="Manny" />
        <Box name="Unortho" />
        <Box name="Chun Lee" />
        <Box name="Lugi" />
      </View>

      {/* MODAL */}
      <Modal
        visible={show}
        // when user closes with gesture or back button on andriod/ios
        onRequestClose={() => {
          toggle(false);
        }}
        animationType="slide"
        // pagesheet - only iOS
        presentationStyle="pageSheet"
      >
        <View style={{ flex: 1, padding: 50, backgroundColor: "lightblue" }}>
          <Text>This is a modal</Text>

          <Button
            title="Close Modal"
            onPress={() => {
              toggle(false);
            }}
            color={"midnightblue"}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // take whole screen
    flex: 1,
    backgroundColor: "#fff",
    color: "tomato",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 60,
  },
  boxesContaiber: {
    gap: 25,
    flex: 1,
    width: "80%",
    backgroundColor: "#f7f7f7",
  },
});
