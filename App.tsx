import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
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
  Dimensions,
  useWindowDimensions,
  SafeAreaView,
  Platform,
} from "react-native";
import Greet from "./components/Greet";
import Box from "./components/Greet";
import CustomButton from "./components/CustomButton/CustomButton";
const localImg = require("./assets/adaptive-icon.png");

export default function App() {
  const [show, toggle] = useState(false);

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" animated />
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            gap: 10,
            paddingTop: 79,
          }}
        >
          <CustomButton
            title="Show Modallll"
            onPress={() => {
              toggle(true);
            }}
          />
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

        <View style={{ flex: 1 }}>
          <Text style={styles.textWelcome}>Welcome</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // take whole screen
    flex: 1,
    backgroundColor: "plum",
    color: "tomato",
    alignItems: "center",
    justifyContent: "center",
    // paddingTop: 60,
  },
  textWelcome: {
    ...Platform.select({
      ios: {
        color: "blue",
      },
      android: {
        color: "red",
      },
    }),
  },
});
