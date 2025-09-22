import { Image, TouchableOpacity, View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function StartButton() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/game')}
      >
        <Image
          source={require("../../assets/images/StartButton.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 150,
    height: 150,
    marginTop: 40, // substitui mt-10
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
