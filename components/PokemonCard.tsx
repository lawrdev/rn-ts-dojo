import { View, Text, StyleSheet, Platform, Image } from "react-native";
import React from "react";

const getTypeDetails = (type: string) => {
  switch (type.toLowerCase()) {
    case "electric":
      return { borderColor: "#FFD700", emoji: "⚡️" };
    case "water":
      return { borderColor: "#6493EA", emoji: "💧" };
    case "fire":
      return { borderColor: "#FF5733", emoji: "🔥" };
    case "grass":
      return { borderColor: "#66CC66", emoji: "🌿" };
    default:
      return { borderColor: "#A0A0A0", emoji: "❓" };
  }
};

const PokemonCard = ({
  name,
  hp,
  image,
  moves,
  type,
  weaknesses,
}: {
  name: string;
  image: string;
  type: string;
  hp: number;
  moves: string[];
  weaknesses: string[];
}) => {
  const { borderColor, emoji } = getTypeDetails(type);

  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={[styles.text_white, styles.name]}>{name}</Text>
        <Text style={[styles.text_white, styles.hp]}>❤️{hp}</Text>
      </View>

      <Image
        //   @ts-ignore
        source={image}
        accessibilityLabel={name + " " + "pokemnon"}
        style={styles.image}
      />

      <View style={styles.typeContainer}>
        <View style={[styles.badge, { borderColor }]}>
          <Text style={[styles.text_white, styles.typeEmoji]}>{emoji}</Text>
          <Text style={[styles.text_white, styles.typeText]}>{type}</Text>
        </View>
      </View>

      <View style={styles.movesConatiner}>
        <Text style={[styles.text_white, styles.movesText]}>
          Moves: {moves.join(", ")}
        </Text>
      </View>

      <View style={styles.waeknessConatiner}>
        <Text style={[styles.text_white, styles.waeknessText]}>
          Weakness: {weaknesses.join(", ")}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text_white: {
    color: "#f1f1f1",
  },
  card: {
    backgroundColor: "#313131",
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,

    ...Platform.select({
      ios: {
        shadowRadius: 4,
        shadowOpacity: 0.3,
        shadowColor: "#333",
        shadowOffset: { width: 2, height: 2 },
      },
      android: {
        elevation: 4,
      },
    }),
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
  },
  hp: {
    fontSize: 15,
    fontWeight: "500",
  },
  image: {
    marginVertical: 20,
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  typeContainer: {
    marginBottom: 40,
    alignItems: "center",
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 4,
  },
  typeEmoji: {
    fontSize: 30,
    marginRight: 12,
  },
  typeText: {
    fontSize: 22,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  movesConatiner: {
    marginBottom: 16,
  },
  movesText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  waeknessConatiner: {
    marginBottom: 16,
  },
  waeknessText: {
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default PokemonCard;
