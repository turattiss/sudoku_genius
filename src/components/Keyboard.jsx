import { Image, TouchableOpacity, View, StyleSheet } from "react-native";

export default function Keyboard({ preencherCelula }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => preencherCelula(1)}
      >
        <Image
          source={require("../../assets/images/1Button.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => preencherCelula(2)}
      >
        <Image
          source={require("../../assets/images/2Button.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => preencherCelula(3)}
      >
        <Image
          source={require("../../assets/images/3Button.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => preencherCelula(4)}
      >
        <Image
          source={require("../../assets/images/4Button.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => preencherCelula(5)}
      >
        <Image
          source={require("../../assets/images/5Button.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => preencherCelula(6)}
      >
        <Image
          source={require("../../assets/images/6Button.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => preencherCelula(7)}
      >
        <Image
          source={require("../../assets/images/7Button.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => preencherCelula(8)}
      >
        <Image
          source={require("../../assets/images/8Button.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => preencherCelula(9)}
      >
        <Image
          source={require("../../assets/images/9Button.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </TouchableOpacity>
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
  },
  button: {
    width: 45,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});