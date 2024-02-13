import { StatusBar } from "expo-status-bar";
import { useEffect, useMemo, useState } from "react";
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
import CustomButton from "./components/CustomButton/CustomButton";
import PokemonCard from "./components/PokemonCard";
const localImg = require("./assets/adaptive-icon.png");

export default function App() {
  const chars = useMemo(() => {
    const obj = {
      charmander: {
        name: "Charmander",
        image: require("./assets/charmander.png"),
        type: "Fire",
        hp: 39,
        moves: ["Scratch", "Ember", "Growl", "Leer"],
        weaknesses: ["Water", "Rock"],
      },
      squirtleData: {
        name: "Squirtle",
        image: require("./assets/squirtle.png"), // Replace with the actual image path
        type: "Water",
        hp: 44,
        moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
        weaknesses: ["Electric", "Grass"],
      },
      bulbasaurData: {
        name: "Bulbasaur",
        image: require("./assets/bulbasaur.png"), // Replace with the actual image path
        type: "Grass",
        hp: 45,
        moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
        weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
      },
      pikachuData: {
        name: "Pikachu",
        image: require("./assets/pikachu.png"), // Replace with the actual image path
        type: "Electric",
        hp: 35,
        moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
        weaknesses: ["Ground"],
      },
    };
    return obj;
  }, []);

  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" animated />  */}
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          {Object.keys(chars).map((char, index) => (
            <PokemonCard key={index} {...chars[char as keyof typeof chars]} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // take whole screen
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
