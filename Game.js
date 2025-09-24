import { Text, View, StyleSheet } from "react-native";
import useFontsLoader from "./src/FontsLoader";
import ExitButton from "./src/components/ExitButton";
import Table from "./src/components/Table";
import Keyboard from "./src/components/Keyboard";

export default function App() {
  const fontsLoaded = useFontsLoader();
  if (!fontsLoaded) return null;

  return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Sudoku Genius</Text>
        </View>
        <View>
          <Table />
        </View>
        <View>
          <Keyboard />
        </View>
        <View>
          <ExitButton />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#e29578",
    paddingVertical: 40,
  },
  title: {
    fontSize: 48, 
    fontWeight: "bold",
    color: "#006d77", 
    fontFamily: "pixel", 
    textAlign: "center",
  },
});
