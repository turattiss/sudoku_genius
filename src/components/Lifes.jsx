import { View, Image, StyleSheet } from "react-native";

export default function Lifes({ vidas }) {
  const hearts = Array(vidas).fill(0);

  return (
    <View style={styles.container}>
      {hearts.map((_, index) => (
        <Image
          key={index}
          source={require("../../assets/images/Heart.png")}
          style={styles.image}
          resizeMode="contain"
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection:"row",
    flexWrap: "wrap",
    gap: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    marginBottom: 15,
  },
  image: {
    width: 40,
    height: 40,
  },
});
